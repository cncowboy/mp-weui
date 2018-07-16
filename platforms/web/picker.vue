<template>
  <div @click="doPicker" >
    <slot></slot>
  </div>
</template>

<script>
  import { picker, datePicker } from 'weui.js'
  import utils from '@/utils'
  export default {
    name: 'picker',
    props: {
      model: {
        type: String,
        default: 'selector'
      },
      value: [Number, String, Array],
      'range-key': String,
      range: {
        required: true,
        type: Array
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onChange: {
        type: Function,
        default: null
      },
      onConfirm: {
        type: Function,
        default: null
      },
      onClose: {
        type: Function,
        default: null
      }
    },
    computed: {
      index () {
        return this.getIndex()
      }
    },
    methods: {
      doPicker () {
        const that = this
        const pickerOptions = {
          defaultValue: [that.value],
          onChange: function (result) {
            if (that.onChange) that.onChange(result[0])
          },
          onConfirm: function (result) {
            if (that.onConfirm) that.onConfirm(result[0])
            console.log(result)
          },
          onClose: () => {
            if (that.onClose) that.onClose()
          }
        }
        if (this.model === 'selector') {
          picker(that.range, pickerOptions)
        } else if (this.model === 'multiSelector') {
          picker(that.range, pickerOptions)
        } else if (this.model === 'date') {
          const date = new Date()
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          pickerOptions.defaultValue = [year, month, day]
          pickerOptions.id = 'datePicker'
          datePicker(pickerOptions)
        } else if (this.model === 'time') {
          let timePicker = []
          for (let hour = 0; hour < 24; hour++) {
            let hourPicker = {
              label: hour,
              value: hour,
              children: []
            }
            let minutePicker = []
            for (let minute = 0; minute < 60; minute++) {
              minutePicker.push({label: utils.formatMinute(minute), value: utils.formatMinute(minute)})
            }
            hourPicker.children = minutePicker
            timePicker.push(hourPicker)
          }
          pickerOptions.id = 'timePicker'
          picker(timePicker, pickerOptions)
        }
      }
    }
  }
</script>
