<template>
<div class="vc-date-picker">
  <input
    type="text"
    :readonly="readonly"
    :value="value"
    @click.stop="toggle">

  <div
    v-show="visible"
    @click.stop="" class="date-picker">
    <div class="date-header">
      <div class="day-panel">
        <div class="prev">
          <span @click="yearClick(-1, true)">&lt;&lt;</span>
          <span @click="monthClick(-1)">&lt;</span>
        </div>
        <div class="value">
          <span @click="toggleState('year')" class="year">{{nowYear}} 年</span>
          <span @click="toggleState('month')" class="month">{{nowMonth + 1}} 月</span>
        </div>
        <div class="next">
          <span @click="monthClick(1)">&gt;</span>
          <span @click="yearClick(1, true)">&gt;&gt;</span>
        </div>
      </div>

      <div v-show="state == 'year'" class="year-panel">
        <div @click="yearRangeClick(-1)" class="prev"><span>&lt;&lt;</span></div>
        <div class="value">
          <span>{{yearStart}} 年 - {{yearStart+9}} 年</span>
        </div>
        <div @click="yearRangeClick(1)" class="next"><span>&gt;&gt;</span></div>
      </div>
      <div v-show="state == 'month'" class="month-panel">
        <div @click="yearClick(-1)" class="prev"><span>&lt;&lt;</span></div>
        <div class="value">
          <span @click="toggleState('year')">{{nowYear}} 年</span>
        </div>
        <div @click="yearClick(1)" class="next"><span>&gt;&gt;</span></div>
      </div>
      <div
        v-if="time"
        v-show="state == 'time'"
        class="time-panel">{{toString()}}</div>
    </div>

    <div v-if="date.length" class="date-body">
      <table class="day-panel">
        <thead>
          <tr class="date-days">
            <th v-for="day in days"><span>{{day}}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6">
            <td v-for="j in 7"
              :class="date[(i-1)*7+j-1].status"
              @click="pickDate((i-1)*7+j-1)">
              <span>{{date[(i-1)*7+j-1].text}}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-show="state == 'year'" class="year-panel">
        <table>
          <tr v-for="i in 4">
            <td
              v-for="j in 3"
              :class="{first: i == 1 && j == 1, last: i == 4 && j == 3, active: nowYear == getYearByIndex(i-1, j-1, yearStart)}">
              <span @click="selectYear(getYearByIndex(i-1, j-1, yearStart), i-1, j-1)">{{getYearByIndex(i-1, j-1, yearStart)}}</span>
            </td>
          </tr>
        </table>
      </div>
      <div v-show="state == 'month'" class="month-panel">
        <table>
          <tr v-for="i in 4">
            <td
              v-for="j in 3"
              :class="{active: nowMonth == (i-1) * 3 + j-1}">
              <span @click="selectMonth(i-1, j-1)">{{months[(i-1) * 3 + j-1]}}月</span>
            </td>
          </tr>
        </table>
      </div>
      <div
        v-if="time"
        v-show="state == 'time'"
        class="time-panel">
        <div class="list">
          <ul><li v-for="i in 24" @click="selectHour(i-1)" :class="{active: i-1 == nowHour}">{{i-1|padding}}</li></ul>
        </div>
        <div class="list">
          <ul><li v-for="i in 60" @click="selectMinute(i-1)" :class="{active: i-1 == nowMinute}">{{i-1|padding}}</li></ul>
        </div>
        <div class="list">
          <ul><li v-for="i in 60" @click="selectSecond(i-1)" :class="{active: i-1 == nowSecond}">{{i-1|padding}}</li></ul>
        </div>
      </div>
    </div>

    <div
      v-if="time"
      v-show="state == 'time' || state == 'date'" class="date-footer">
      <span @click="toggleState('time')">{{state == 'date' ? '选择时间' : '确定'}}</span>
    </div>
  </div>
</div>
</template>

<script>
// ref https://github.com/Bubblings/vue-date-picker

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      // YYYY-MM-DD HH:mm:ss
      default: 'YYYY-MM-DD'
    },
    time: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: false,
      now: new Date(),
      // year, month, date, time
      state: 'date',
      date: [],
      yearStart: 0,
      month: [],
      months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      days: ['日', '一', '二', '三', '四', '五', '六']
    }
  },

  computed: {
    nowYear () {
      return this.now.getFullYear()
    },
    nowMonth () {
      return this.now.getMonth()
    },
    nowDate () {
      return this.now.getDate()
    },
    nowHour () {
      return this.now.getHours()
    },
    nowMinute () {
      return this.now.getMinutes()
    },
    nowSecond () {
      return this.now.getSeconds()
    }
  },

  methods: {
    hide () {
      document.removeEventListener('click', this.closeOnDocumentClick, false)
      this.visible = false
    },

    show () {
      this.now = this.parse(this.value) || new Date()
      this.updateDate()
      this.visible = true
      document.addEventListener('click', this.closeOnDocumentClick, false)
    },

    closeOnDocumentClick () {
      this.hide()
    },

    toggle (e) {
      this.visible ? this.hide() : this.show()
    },

    toggleState (state) {
      if (state !== this.state) {
        this.state = state
        if (state === 'year') {
          let year = this.nowYear
          this.yearStart = year - year % 10
        }
      } else if (state !== 'date') {
        this.state = 'date'
      }
    },

    getYearByIndex (i, j, start) {
      return start + i * 3 + j - 1
    },

    yearRangeClick (dir) {
      let start = this.yearStart
      this.yearStart = start - start % 10 + 10 * dir
    },

    selectYear (year, i, j) {
      if (i === 0 && j === 0) {
        this.yearRangeClick(-1)
      } else if (i === 3 && j === 2) {
        this.yearRangeClick(1)
      } else {
        this.now.setFullYear(year)
        this.now = new Date(this.now)
        this.state = 'month'
      }
    },

    selectMonth (i, j) {
      this.now.setMonth(i * 3 + j)
      this.now = new Date(this.now)
      this.updateDate()
      this.state = 'date'
    },

    yearClick (flag, update) {
      this.now.setFullYear(this.nowYear + flag)
      this.now = new Date(this.now)
      if (update) {
        this.updateDate()
      }
    },

    monthClick (flag) {
      this.now.setMonth(this.nowMonth + flag)
      this.now = new Date(this.now)
      this.updateDate()
    },

    selectHour (i) {
      this.now.setHours(i)
      this.now = new Date(this.now)
    },

    selectMinute (i) {
      this.now.setMinutes(i)
      this.now = new Date(this.now)
    },

    selectSecond (i) {
      this.now.setSeconds(i)
      this.now = new Date(this.now)
    },

    pickDate (index) {
      this.hide()
      let date = new Date(this.date[index].time)
      date.setHours(this.nowHour)
      date.setMinutes(this.nowMinute)
      date.setSeconds(this.nowSecond)
      this.now = date
      this.$emit('input', this.toString(), this.now.getTime())
    },

    updateDate () {
      var arr = []
      var time = new Date(this.now)
      // the first day
      time.setMonth(time.getMonth(), 1)
      var curFirstDay = time.getDay()
      curFirstDay === 0 && (curFirstDay = 7)
      // the last day
      time.setDate(0)
      var lastDayCount = time.getDate()

      for (let i = curFirstDay; i > 0; i--) {
        arr.push({
          text: lastDayCount - i + 1,
          time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
          status: 'date-pass'
        })
      }

      // the last day of this month
      time.setMonth(time.getMonth() + 2, 0)
      var curDayCount = time.getDate()
      // fix bug when month change
      time.setDate(1)
      var value = this.toString(this.now, 'YYYY-MM-DD')

      for (let i = 0; i < curDayCount; i++) {
        let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1)
        let status = this.toString(tmpTime, 'YYYY-MM-DD') === value ? 'active' : ''
        arr.push({
          text: i + 1,
          time: tmpTime,
          status: status
        })
      }

      var j = 1
      while (arr.length < 42) {
        arr.push({
          text: j,
          time: new Date(time.getFullYear(), time.getMonth() + 1, j),
          status: 'date-future'
        })
        j++
      }

      this.date = arr
    },

    parse (str) {
      let time = new Date(str)
      return isNaN(time.getTime()) ? null : time
    },

    toString (time = this.now, format = this.format) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      let monthName = time.getMonth() + 1
      let hour = time.getHours()
      let minute = time.getMinutes()
      let second = time.getSeconds()
      let pad = v => v >= 10 ? v : '0' + v

      const map = {
        YYYY: year,
        MM: pad(month),
        M: month,
        DD: pad(date),
        D: date,
        HH: pad(hour),
        H: hour,
        mm: pad(minute),
        m: minute,
        ss: pad(second),
        s: second
      }

      return format.replace(/Y+|M+|D+|H+|m+|s+/g, str => map[str])
    }
  },

  filters: {
    padding (v) {
      return v >= 10 ? v : '0' + v
    }
  }
}
</script>

<style lang="less">
.vc-date-picker {
  position: relative;
  display: inline-block;
  font-size: 14px;

  > input {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #B9B9B9;
    font-size: 14px;
    color: #333;
  }

  .date-picker {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1000;
    width: 240px;
    margin-top: 5px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    color: rgba(0,0,0,.65);
    user-select: none;
  }

  .date-header {
    position: relative;
    text-align: center;
    height: 40px;
    line-height: 40px;

    span {
      display: inline-block;
      cursor: pointer;
    }

    .prev,
    .next {
      position: absolute;
      top: 0;
      color: rgba(0,0,0,.43);
      span {
        padding: 0 5px;
      }
    }
    .prev {
      left: 8px;
    }
    .next {
      right: 8px;
    }

    .value {
      font-weight: 700;
    }
    .year {
      margin-right: 10px;
    }
  }

  .date-body {
    position: relative;
    border-top: 1px solid #e9e9e9;
    padding: 4px 8px;
  }

  .date-footer {
    border-top: 1px solid #e9e9e9;
    text-align: center;
    span {
      display: inline-block;
      padding: 8px 10px;
      cursor: pointer;
    }
  }

  .year-panel,
  .month-panel,
  .time-panel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }

  // day panel
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    text-align: center;
    padding: 3px 0;
  }

  th span,
  td span {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
  td span {
    cursor: pointer;
  }

  td.date-pass span,
  td.date-future span {
    color: rgba(0,0,0,.25);
  }

  td:hover span {
    background-color: #ecf6fd;
  }
  td.active span {
    color: #fff;
    background-color: #108ee9;
  }

  .date-body .month-panel td,
  .date-body .year-panel td {
    height: 54.5px;
    vertical-align: middle;

    &:hover {
      color: #108ee9;
    }

    span {
      width: auto;
      height: auto;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
  }

  .date-body .year-panel td {
    &.first,
    &.last {
      color: rgba(0,0,0,.25);
    }
  }

  .date-body .time-panel .list {
    float: left;
    width: 33.333333%;
    height: 100%;
    text-align: center;
    overflow: auto;
  }

  .date-body .time-panel li {
    height: 30px;
    line-height: 30px;
    cursor: pointer;

    &:hover {
      background: #ecf6fd;
    }
    &.active {
      background: #f7f7f7;
      font-weight: 700;
    }
  }
}
</style>
