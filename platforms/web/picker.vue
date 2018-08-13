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
      id: String,
      mode: {
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
      convertDateFromString (dateString) {
        if (dateString) {
          var arr1 = dateString.split(' ')
          var sdate = arr1[0].split('-')
          if (sdate.length !== 3) return null
          var date = new Date(sdate[0], sdate[1] - 1, sdate[2])
          return date
        }
        return null
      },
      doPicker () {
        const that = this
        const pickerOptions = {
          defaultValue: this.mode === 'selector' ? [that.value] : that.value,
          onChange: function (result) {
          },
          onConfirm: function (result) {
            if (result.length === 1) {
              that.$emit('change', result[0]);
              return
            }
            that.$emit('change', result);

            if (that.onConfirm) {
              if (result.length === 1) {
                that.onConfirm(result[0]);
                return
              }
              that.onConfirm(result)
            }
          },
          onClose: () => {
            if (that.onClose) that.onClose()
          }
        }
        if (this.mode === 'selector') {
          picker(that.range, pickerOptions)
        } else if (this.mode === 'multiSelector') {
          picker(that.range, pickerOptions)
        } else if (this.mode === 'date') {
          let theDate = that.convertDateFromString(that.value)
          if (!theDate) theDate = new Date()
          const year = theDate.getFullYear()
          const month = theDate.getMonth() + 1
          const day = theDate.getDate()
          pickerOptions.defaultValue = [year, month, day]
          pickerOptions.id = 'datePicker'
          if (that.id) pickerOptions.id += that.id
          datePicker(pickerOptions)
        } else if (this.mode === 'time') {
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
