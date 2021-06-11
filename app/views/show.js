export default function show(locals) {
  const { widget } = locals;

  return `
    <table class="table">
      <tr><td>ID</td><td>${widget.id}</td></tr>
      <tr><td>Name</td><td>${widget.name.toLowerCase()}</td></tr>
      <tr><td>Purpose</td><td>${widget.purpose}</td></tr>
      <tr><td>Active</td><td>${widget.active.toString()}</td></tr>
    </table>
  `;
}
