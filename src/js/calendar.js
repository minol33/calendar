const methods = {
    setCalendar: function(_date, _mark = '-', _startOfWeek = 0) {
        const year = this.formatDate(_date, _mark, 'year')
        const month = this.formatDate(_date, _mark, 'month')
        const firstDay = new Date(year, month - 1, 1)
        const lastDay = new Date(year, month, 0)
        const today = new Date(this.formatDate(_date) + ' 00:00:00')
        console.log(today, today)
        const firstWeek = firstDay.toString().slice(0, 3).toLowerCase()

        // startOfWeek가 0이면 일요일 시작, 1이면 월요일 시작
        const weekNumber = this.formatWeek(firstWeek, _startOfWeek)

        // 1일에서 weekNumber만큼 빼기
        const startDay = this.addDays(firstDay, -weekNumber)
        const rows = []

        let days = []
        let date = startDay
        let day = ''
        while (date <= lastDay) {
            for (let i = 0; i < 7; i += 1) {
                day = this.formatDate(date, '', 'day').toString()
                let dateInfo = {
                    day,
                    date,
                    // past: 과거 true, 오늘 'today', 미래 false
                    past: this.isSameDate(today, date)? 'today' : date < today,

                }
                days.push(dateInfo)
                date = this.addDays(date, 1)
            }
            rows.push({days: days})
            days = []
        }
        console.log(rows)

        return rows
    },
    // 날짜 비교
    isSameDate: function(date1, date2) {
        return date1.getFullYear() === date2.getFullYear()
            && date1.getMonth() === date2.getMonth()
            && date1.getDate() === date2.getDate();
    },
    // 날짜 + -
    addDays: function(date, number) {
        return new Date(date.setDate(date.getDate() + number))

    },
    // 날짜 포맷
    formatDate: function(date, mark = '-', type = 'date') {
        let t
        const year = date.getFullYear()
        let month = date.getMonth() + 1
        month = month >= 10 ? month : '0' + month
        let day = date.getDate()
        day = day >= 10 ? day : '0' + day
        switch (type) {
            case 'year' :
                t = year
                break;
            case 'month' :
                t = month
                break;
            case 'day' :
                t = day
                break;
            case 'date' :
                t = year + mark + month + mark + day
                break;
        }
        return t

    },
    // 요일 포멧 ( number )
    // startOfWeek가 0이면 일요일 시작, 1이면 월요일 시작
    formatWeek: function (week, startOfWeek = 0) {
        let t
        console.log(week)
        switch (week) {
            case 'mon' :
                t = startOfWeek === 1 ? 0 : 1
                break;
            case 'tue' :
                t = startOfWeek === 1 ? 1 : 2
                break;
            case 'wed' :
                t = startOfWeek === 1 ? 2 : 3
                break;
            case 'thu' :
                t = startOfWeek === 1 ? 3 : 4
                break;
            case 'fri' :
                t = startOfWeek === 1 ? 4 : 5
                break;
            case 'sat' :
                t = startOfWeek === 1 ? 5 : 6
                break;
            case 'sun' :
                t = startOfWeek === 1 ? 6 : 0
                break;
        }
        return t
    }

}

export default methods