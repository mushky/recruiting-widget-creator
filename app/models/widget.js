import FileDb from '../file-db.js';

const db = new FileDb('widget-data.json');

export default class Widget {
  constructor({ id = null, name = null, purpose = null, active = false }) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
    this.active = ['true', true].includes(active);
  }

  static find(id) {
    const records = db.read();
    const record = records.find(r => r.id === Number(id));
    if (!record) {
      throw new Error(`No Widget found with id ${id}`)
    }
    return new Widget(record);
  }

  save() {
    const records = db.read();
    if (!this.id) {
      const highestId = Math.max(...records.map(r => r.id).concat(0));
      this.id = highestId + 1;
    }
    const existingIndex = records.findIndex(r => r.id === this.id);
    this.validateForm()
    if (existingIndex > -1) {
      records.splice(existingIndex, 1, this)
    } else {
      records.push(this);
    }

    db.write(records);
  }

  validateForm() {  
    const errors = [];

    if (this.validateForDuplicateName()) {
      errors.push(`Widget with name ${this.name} already exists.`)
    }

    if (this.validateNameNotEmpty()) {
      errors.push(`Name cannot be empty`)
    }

    if (this.validatePurposeNotEmptyIfActiveTrue()) {
      errors.push(`Purpose cannot be empty while active is true`)
    }
    
    if (errors.length > 0) {
      throw (
        {
          error: errors, 
          name: `${this.name}`, purpose: `${this.purpose}`, active: this.active
        }
      )
    }

  }

  // Validate for duplicate names
  validateForDuplicateName() {
    const records = db.read();
    const existingName = records.find(r => r.name === this.name)
    if (existingName) {
      return true
    }
  }

  // Validate name is not empty.
  validateNameNotEmpty() {
    if (this.name.length <= 0) {
      return true
    }
  }

  // Validate if active is true then purpose cannot be empty.
  validatePurposeNotEmptyIfActiveTrue() {
    if (this.active && this.purpose.length <= 0) {
      return true
    }
  }

}
