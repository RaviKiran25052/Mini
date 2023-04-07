const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  regno: {
    type: String,
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: "student@123"
  },
  phoneNo: {
    type: String,
    default: "none"
  },
  marks: {
    tenth: {
      type: String,
      default: "none"
    },
    inter: {
      type: String,
      default: "none"
    },
    Sem: {
      No: {
        1: {
          type: String,
          default: "none"
        },
        2: {
          type: String,
          default: "none"
        },
        3: {
          type: String,
          default: "none"
        },
        4: {
          type: String,
          default: "none"
        },
        5: {
          type: String,
          default: "none"
        },
        6: {
          type: String,
          default: "none"
        },
        7: {
          type: String,
          default: "none"
        },
        8: {
          type: String,
          default: "none"
        }
      }
    }
  },
  project: [
    {
      title: {
        type: String,
        default: "none"
      },
      Desp: {
        type: String,
        default: "none"
      },
      fromDate: {
        type: Date,
        format: 'dd/mm/yyyy',
        default: "00/00/0000"
      },
      toDate: {
        type: Date,
        format: 'dd/mm/yyyy',
        default: "00/00/0000"
      }
    }
  ],

  skills: [String],
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
