// Schedule.jsx
import { Plus, X, Check } from "lucide-react";

function Schedule(props) {
  // 일정 추가 버튼 토글
  const toggleAddEvent = () => {
    props.setIsAddingEvent(!props.isAddingEvent);
    if (!props.isAddingEvent && props.selectedDate) {
      props.setNewEvent({
        title: "",
        start: props.selectedDate,
        end: props.selectedDate,
        completed: false,
      });
    }
  };

  // 입력값 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setNewEvent({
      ...props.newEvent,
      [name]: value,
    });
  };

  // 일정 추가 처리
  const handleAddEvent = () => {
    if (props.newEvent.title && props.newEvent.start && props.newEvent.end) {
      props.setEvents([...props.events, { id: Date.now(), ...props.newEvent }]);
      props.setNewEvent({ title: "", start: "", end: "", completed: false });
      props.setIsAddingEvent(false);
    }
  };

  // 일정 완료 여부 토글
  const handleToggleComplete = (id) => {
    props.setEvents(
      props.events.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
  };

  // 일정 삭제
  const handleDeleteEvent = (id) => {
    props.setEvents(props.events.filter((event) => event.id !== id));
  };

  // 특정 날짜의 이벤트 필터링
  const getEventsForDate = (date) => {
    const current = new Date(date);
    return props.events.filter((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);
      return current >= start && current <= end;
    });
  };

  // 일정 리스트 UI 렌더링
  const renderEventList = (list) => (
    <ul className="space-y-2">
      {list.map((event) => (
        <li
          key={event.id}
          className="flex items-center justify-between p-2 border rounded"
        >
          <div className="flex items-center">
            {/* 체크박스: 완료 여부 토글 */}
            <button
              onClick={() => handleToggleComplete(event.id)}
              className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center
                ${
                  event.completed
                    ? "bg-green-500 text-white"
                    : "border border-gray-300"
                }`}
            >
              {event.completed && <Check size={12} />}
            </button>

            {/* 일정 제목 */}
            <span
              className={event.completed ? "line-through text-gray-500" : ""}
            >
              {event.title}
            </span>
          </div>

          {/* 삭제 버튼 */}
          <button
            onClick={() => handleDeleteEvent(event.id)}
            className="text-red-500 hover:text-red-700"
          >
            <X size={16} />
          </button>
        </li>
      ))}
    </ul>
  );

  // 선택된 날짜의 일정
  const selectedDateEvents = props.selectedDate
    ? getEventsForDate(props.selectedDate)
    : [];

  const formattedDate = props.selectedDate
    ? new Date(props.selectedDate)
    : null;

  return (
    <div>
      {/* 상단 날짜 & 일정 추가 버튼 */}
      {props.selectedDate && (
        <div className="mt-4 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">
              {formattedDate.getFullYear()}년 {formattedDate.getMonth() + 1}월{" "}
              {formattedDate.getDate()}일 일정
            </h3>
            <button
              onClick={toggleAddEvent}
              className="flex items-center text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              {props.isAddingEvent ? <X size={24} /> : <Plus size={24} />}
              {props.isAddingEvent ? "취소" : "일정 추가"}
            </button>
          </div>
        </div>
      )}

      {/* 일정 추가 폼 */}
      {props.isAddingEvent && (
        <div className="mt-2 p-2 bg-blue-50 rounded">
          <input
            type="text"
            name="title"
            value={props.newEvent.title}
            onChange={handleInputChange}
            placeholder="일정 제목"
            className="w-full p-2 border rounded mb-2"
          />

          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <label className="text-sm text-gray-600 block">시작일</label>
              <input
                type="date"
                name="start"
                value={props.newEvent.start}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600 block">종료일</label>
              <input
                type="date"
                name="end"
                value={props.newEvent.end}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <button
            onClick={handleAddEvent}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            저장
          </button>
        </div>
      )}

      {/* 선택된 날짜의 일정 목록 */}
      <div className="mt-2">
        {selectedDateEvents.length === 0 ? (
          <p className="text-gray-500 text-sm">일정이 없습니다.</p>
        ) : (
          renderEventList(selectedDateEvents)
        )}
      </div>
    </div>
  );
}

export default Schedule;
