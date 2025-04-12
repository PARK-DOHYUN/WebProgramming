// TheCalendar.jsx
function TheCalendar(props) {
  // 해당 월의 일 수 계산
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  // 📌 해당 월의 1일이 무슨 요일인지 반환 (0: 일 ~ 6: 토)
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  // 📌 달력에 표시할 날짜 목록 생성 (이전 달/현재 달/다음 달 포함)
  const generateCalendarDays = () => {
    const year = props.currentMonth.getFullYear();
    const month = props.currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    const prevMonthDays = getDaysInMonth(year, month - 1);

    // 이전 달의 날짜 채우기 (공백 처리)
    for (let i = 0; i < firstDay; i++) {
      days.push({
        day: prevMonthDays - firstDay + i + 1,
        month: month - 1,
        year: month === 0 ? year - 1 : year,
        isCurrentMonth: false,
      });
    }

    // 현재 달의 날짜들
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, month, year, isCurrentMonth: true });
    }

    // 다음 달의 날짜 채우기 (달력을 6주로 유지)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        day: i,
        month: month + 1,
        year: month === 11 ? year + 1 : year,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  // 날짜 문자열 형식 YYYY-MM-DD
  const formatDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  // 특정 날짜에 해당하는 이벤트 목록 반환
  const getEventsForDate = (date) => {
    const current = new Date(date);
    return props.events.filter((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);
      return current >= start && current <= end;
    });
  };

  // 이전 달로 이동
  const prevMonth = () => {
    props.setCurrentMonth(
      new Date(
        props.currentMonth.getFullYear(),
        props.currentMonth.getMonth() - 1,
        1
      )
    );
  };

  // 다음 달로 이동
  const nextMonth = () => {
    props.setCurrentMonth(
      new Date(
        props.currentMonth.getFullYear(),
        props.currentMonth.getMonth() + 1,
        1
      )
    );
  };

  // 📌 날짜 클릭 시 선택 날짜 설정 및 일정 추가 폼 갱신
  const handleDateClick = (y, m, d) => {
    const dateStr = formatDate(y, m, d);
    props.setSelectedDate(dateStr);
    if (props.isAddingEvent) {
      props.setNewEvent({
        ...props.newEvent,
        start: dateStr,
        end: dateStr,
      });
    }
  };

  const calendarDays = generateCalendarDays();
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {/* 월 제목 및 이동 버튼 */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {props.currentMonth.getFullYear()}년{" "}
          {monthNames[props.currentMonth.getMonth()]}
        </h2>
        <div className="space-x-2">
          <button
            onClick={prevMonth}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &lt;
          </button>
          <button
            onClick={nextMonth}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* 날짜 셀 */}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {calendarDays.map((day, index) => {
          const dateStr = formatDate(day.year, day.month, day.day);
          const events = getEventsForDate(dateStr);
          const isSelected = dateStr === props.selectedDate;

          return (
            <div
              key={index}
              className={`aspect-[8/7] border p-1 rounded-md flex flex-col text-sm cursor-pointer
                ${day.isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"}
                ${isSelected ? "border-blue-500 border-2" : "border-gray-200"}`}
              onClick={() => handleDateClick(day.year, day.month, day.day)}
            >
              {/* 날짜 숫자 */}
              <div className="text-right mb-1">{day.day}</div>

              {/* 해당 날짜의 이벤트 최대 2개 표시 */}
              <div className="flex flex-col gap-1 overflow-hidden">
                {events.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className={`truncate px-1 py-0.5 rounded text-white text-xs
                      ${event.completed ? "bg-green-500" : "bg-blue-500"}`}
                  >
                    {event.title}
                  </div>
                ))}
                {events.length > 2 && (
                  <div className="text-gray-400 text-xs">
                    +{events.length - 2}개
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TheCalendar;
