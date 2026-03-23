"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric"
});

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
});

const weekdayAvailability: Record<number, string[]> = {
  1: ["09:00", "11:30", "15:00"],
  2: ["10:00", "13:00", "16:00"],
  3: ["09:30", "12:00", "14:30"],
  4: ["08:30", "11:00", "15:30"],
  5: ["09:00", "12:30"]
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function isSameDay(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function isSameMonth(left: Date, right: Date) {
  return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
}

function getTimeSlots(date: Date, today: Date) {
  if (date < today) {
    return [];
  }

  return weekdayAvailability[date.getDay()] ?? [];
}

function getFirstAvailableDate(monthDate: Date, today: Date) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= lastDayOfMonth; day += 1) {
    const candidate = new Date(year, month, day);
    if (getTimeSlots(candidate, today).length > 0) {
      return candidate;
    }
  }

  return null;
}

export function BookingCalendar() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [currentMonth, setCurrentMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => getFirstAvailableDate(today, today));
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (!selectedDate || !isSameMonth(selectedDate, currentMonth)) {
      const fallbackDate = getFirstAvailableDate(currentMonth, today);
      setSelectedDate(fallbackDate);
      setSelectedTime(fallbackDate ? getTimeSlots(fallbackDate, today)[0] ?? "" : "");
      return;
    }

    const nextSlots = getTimeSlots(selectedDate, today);
    if (!nextSlots.includes(selectedTime)) {
      setSelectedTime(nextSlots[0] ?? "");
    }
  }, [currentMonth, selectedDate, selectedTime, today]);

  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const gridStart = addDays(firstDayOfMonth, -firstDayOfMonth.getDay());

    return Array.from({ length: 42 }, (_, index) => {
      const date = addDays(gridStart, index);
      const slots = getTimeSlots(date, today);

      return {
        date,
        slots,
        isPast: date < today,
        inCurrentMonth: isSameMonth(date, currentMonth)
      };
    });
  }, [currentMonth, today]);

  const availableSlots = selectedDate ? getTimeSlots(selectedDate, today) : [];
  const selectedSummary =
    selectedDate && selectedTime
      ? `${fullDateFormatter.format(selectedDate)} at ${selectedTime} SAST`
      : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)]">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Available Consultations</p>
            <h2 className="mt-1 text-2xl font-semibold text-ink">{monthFormatter.format(currentMonth)}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition hover:bg-panel"
              aria-label="Previous month"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition hover:bg-panel"
              aria-label="Next month"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-muted">
          {dayLabels.map((label) => (
            <div key={label} className="py-2">
              {label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map(({ date, slots, isPast, inCurrentMonth }) => {
            const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
            const isAvailable = slots.length > 0;
            const isSelectable = isAvailable && inCurrentMonth;

            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(slots[0] ?? "");
                }}
                disabled={!isSelectable}
                className={[
                  "min-h-24 rounded-2xl border p-3 text-left transition",
                  isSelected ? "border-brand bg-brand text-white shadow-card" : "border-slate-200 bg-white",
                  inCurrentMonth ? "" : "opacity-60",
                  !isSelectable ? "cursor-not-allowed border-dashed bg-slate-50 text-slate-400" : "",
                  !isSelected && isSelectable ? "hover:border-brand hover:bg-panel" : ""
                ].join(" ")}
                aria-label={fullDateFormatter.format(date)}
              >
                <span className="block text-sm font-semibold">{date.getDate()}</span>
                <span
                  className={[
                    "mt-3 block text-xs",
                    isSelected ? "text-blue-100" : isSelectable ? "text-muted" : "text-slate-400"
                  ].join(" ")}
                >
                  {isPast ? "Unavailable" : isSelectable ? `${slots.length} slots` : "No slots"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="card p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Consultation Details</p>
        <h3 className="mt-1 text-2xl font-semibold text-ink">
          {selectedDate ? fullDateFormatter.format(selectedDate) : "Select a date"}
        </h3>
        <p className="mt-3 text-sm text-muted">
          Choose a weekday slot for a 45-minute architecture consultation. Sessions are remote and
          scheduled in SAST.
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium text-ink">Available times</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {availableSlots.length > 0 ? (
              availableSlots.map((slot) => {
                const isSelectedTime = slot === selectedTime;

                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={[
                      "rounded-lg border px-4 py-3 text-sm font-medium transition",
                      isSelectedTime
                        ? "border-brand bg-brand text-white"
                        : "border-line text-ink hover:bg-panel"
                    ].join(" ")}
                  >
                    {slot}
                  </button>
                );
              })
            ) : (
              <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-muted sm:col-span-2">
                No consultation slots are available for the selected day.
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-panel p-4">
          <p className="text-sm font-medium text-ink">Selected consultation window</p>
          <p className="mt-2 text-sm text-muted">
            {selectedSummary ?? "Pick an available date and time to continue."}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact?intent=audit" className="btn-primary">
            Continue to Qualification
          </Link>
          <Link href="/services" className="btn-secondary">
            Review Service Packages
          </Link>
        </div>
      </aside>
    </div>
  );
}
