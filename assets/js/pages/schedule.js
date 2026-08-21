document.addEventListener("DOMContentLoaded", () => {
  const scheduleContainer = document.getElementById("scheduleContainer");

  scheduleContainer.innerHTML = scheduleData
    .map(
      (x) => `
        <tr>
          <td>
            <strong class="day-name">
              <i class="bi bi-calendar3"></i>
              ${x.day}
            </strong>
          </td>

          <td>
            <span class="area-badge">
              <i class="bi bi-geo-alt-fill"></i>
              ${x.area}
            </span>
          </td>

          <td>
            <span class="task-text">
              <i class="bi bi-check2-circle"></i>
              ${x.task}
            </span>
          </td>

          <td>
            <span class="time-badge">
              <i class="bi bi-clock-fill"></i>
              ${x.time}
            </span>
          </td>

          <td>
            <span class="staff-badge">
              <i class="bi bi-person-fill"></i>
              ${x.staff}
            </span>
          </td>
        </tr>
      `,
    )
    .join("");
});
