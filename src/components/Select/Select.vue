<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: [Function, Object],
      default: () => null
    }
  },

  data () {
    return {
      selectedLabel: '',
      selectedValue: '',
      visible: false
    }
  },

  render (h) {
    let optionList = this.$slots.default
      .filter(x => !!x.tag)
      .map((x, idx) => {
        let opt = x.componentOptions
        let value = opt.propsData.value
        let label = opt.children[0].text

        if (!this.selectedValue &&
          typeof opt.propsData.selected !== 'undefined') {
          this.selectedValue = value
          this.selectedLabel = label
        }

        let data = {
          'class': {
            'vc-select-option': true,
            'selected': opt.propsData.value === this.selectedValue
          },
          'on': {
            click: () => this.onSelect(idx, value, label)
          }
        }

        return h('div', data, opt.children)
      })

    let options = h(
      'div',
      {
        'class': {
          'vc-select-options': true,
          'visible': this.visible
        }
      },
      optionList
    )

    let selection = h(
      'div',
      {
        'class': {
          'vc-select-selection': true,
          'active': this.visible
        },
        'on': {
          click: this.onClick
        }
      },
      this.selectedLabel
    )

    return h('div', {'class': 'vc-select'}, [selection, options])
  },

  methods: {
    onClick () {
      this.visible ? this.hide() : this.show()
    },

    onSelect (idx, value, label) {
      this.selectedValue = value
      this.selectedLabel = label
      this.hide()
      this.$emit('change', value, label, idx)
    },

    show () {
      this.visible = true
      document.addEventListener('click', this.closeOnDocumentClick, false)
    },

    hide () {
      this.visible = false
      document.removeEventListener('click', this.closeOnDocumentClick, false)
    },

    closeOnDocumentClick (e) {
      if (!this.$el.contains(e.target)) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="less">
.vc-select {
  display: inline-block;
  position: relative;
  font-size: 12px;

  .vc-select-selection {
    position: relative;
    height: 28px;
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    line-height: 26px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    user-select: none;
    cursor: pointer;

    &:hover,
    &.active {
      border-color: #49a9ee;
    }

    &.active {
      box-shadow: 0 0 0 2px rgba(16,142,233,.2);
    }
  }

  .vc-select-options {
    display: none;
    position: absolute;
    top: 32px;
    z-index: 1050;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);

    &.visible {
      display: block;
    }
  }

  .vc-select-option {
    position: relative;
    padding: 7px 16px;
    font-weight: 400;
    color: rgba(0,0,0,.65);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    transition: background .3s ease;

    &.selected {
      background-color: #f7f7f7;
      font-weight: 700;
      color: rgba(0,0,0,.65);
    }

    &:hover {
      background-color: #ecf6fd;
    }
  }
}
</style>
