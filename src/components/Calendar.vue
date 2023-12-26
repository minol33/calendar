<template>
  <div>
    <table>
      <colgroup>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
        <col>
      </colgroup>
      <thead>
      <tr>
        <th>일</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
        <th>토</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="`r-${index}`">
        <td v-for="(day, index) in row.days" :key="`d-${index}`">
          <div>
            <span>{{ day.day }}</span>
<!--            <span v-if="!day.enable" class="text">휴무</span>-->
<!--            <span v-if="day.type === 'today'" class="text">오늘</span>-->
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import js from '../js/calendar.js'
export default {
  name: "Calendar",
  data() {
    return {
        rows: []
    }
  },
  mounted() {
    // js.setCalendar(date(required), mark(default '-'), startOfWeek(default 0 // 0:일요일시작 1:월요일시작))
    this.rows = js.setCalendar(new Date())
    console.log(this.rows)
  }

}
</script>

<style scoped>

</style>