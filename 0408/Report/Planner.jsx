// Planner.jsx
import { useState } from "react";
import TheCalendar from "./TheCalender";
import Schedule from "./Schedule";
import ToDo from "./ToDo";

function Planner() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "과제하기",
      completed: false,
    },
  ]);

  const [newTodos, setNewTodos] = useState({ content: "", completed: false });

  const [isAddingTodo, setIsAddingTodo] = useState(false);

  // 일정 배열: 각 일정은 id, 제목, 시작일, 종료일, 완료 여부를 가짐
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "프로젝트 회의",
      start: "2025-04-11",
      end: "2025-04-11",
      completed: false,
    },
    {
      id: 2,
      title: "회사 워크샵",
      start: "2025-04-12",
      end: "2025-04-14",
      completed: false,
    },
    {
      id: 3,
      title: "가족 모임",
      start: "2025-04-15",
      end: "2025-04-15",
      completed: true,
    },
  ]);

  // 새로 추가될 일정 정보
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    completed: false,
  });

  // 일정 추가 폼 보이기 여부
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  // 현재 선택된 날짜 (달력에서 클릭 시 지정됨)
  const [selectedDate, setSelectedDate] = useState(null);

  // 현재 달력에 표시되는 달 (기본은 오늘 기준 달)
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 헤더 */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">플래너 웹사이트</h1>
      </header>

      {/* 🔷 본문: 달력과 일정 사이드뷰 */}
      <main className="flex flex-col md:flex-row gap-4 p-4">
        {/* 달력 */}
        <div className="w-full md:w-3/5">
          <TheCalendar
            events={events}
            setEvents={setEvents}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            isAddingEvent={isAddingEvent}
            setIsAddingEvent={setIsAddingEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        </div>

        {/* 선택한 날짜의 일정 리스트 + 일정 추가 UI */}
        <div className="w-full md:w-1/5 bg-white rounded-xl shadow-md p-4">
          <Schedule
            events={events}
            setEvents={setEvents}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            isAddingEvent={isAddingEvent}
            setIsAddingEvent={setIsAddingEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        </div>

        {/* 할 일 목록*/}
        <div className="w-full md:w-1/5 bg-white rounded-xl shadow-md p-4">
          <ToDo
            todos={todos}
            setTodos={setTodos}
            newTodos={newTodos}
            setNewTodos={setNewTodos}
            isAddingTodo={isAddingTodo}
            setIsAddingTodo={setIsAddingTodo}
          ></ToDo>
        </div>
      </main>
    </div>
  );
}

export default Planner;
