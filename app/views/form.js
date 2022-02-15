export default function form({ error, name, purpose, active }) {
    return `
    <form method="post">
      <div class="mb-3">
        <label for="name" class="form-label">Widget Name</label>
        <input type="text" class="form-control" id="name" name="name" value=${name || ''}>
      </div>
      <div class="mb-3">
        <label for="purpose" class="form-label">Purpose</label>
        <textarea class="form-control" id="purpose" name="purpose" >${purpose || ''}</textarea>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="active" name="active" value=true ${active ? 'checked' : '' }>
        <label class="form-check-label" for="active">Widget is Active</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    ${error ? `
      <div>
        <p class="alert alert-warning">${error.join('<br>')}</p>
      </div>` : ''
    }
  `;
}
