
import validator from 'validator';

class ValidateFields {
 
  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Please, enter valid email address';
    } else if (!validator.isEmail(email)) {
      return 'Please, enter valid email address';
    }
    return false;
  }

  validateFirstName(firstname) {
    if (validator.isEmpty(firstname)) {
      return 'Please, enter valid First Name';
    } else if (!validator.isLength(firstname, { min: 2 })) {
      return 'Please, enter valid First Name';
    }
    return false;
  }

  validateLastName(lastname) {
    if (validator.isEmpty(lastname)) {
      return 'Please, enter valid Last Name';
    } else if (!validator.isLength(lastname, { min: 2 })) {
      return 'Please, enter valid Last Name';
    }
    return false;
  }

  validateBirthday(date) {
    if (validator.isEmpty(date)) {
      return 'Please, enter valid Date';
    } else if (!validator.isDate(date, { format: "DD/MM/YYYY", delimiters: ['/'] })) {
      return 'Please, enter valid Date';
    }
    return false;
  }

  validatePhone(phone) {
    if (validator.isEmpty(phone)) {
      return 'Please, enter valid Phone Number';
    } else if (!validator.isMobilePhone(phone)) {
      return 'Please, enter valid Phone Number';
    }
    return false;
  }

  validateAddress(address) {
    if (validator.isEmpty(address)) {
      return 'Please, enter valid Address';
    } else if (!validator.isLength(address, { min: 12 })) {
      return 'Please, enter valid Address';
    }
    return false;
  }

  validateGender(gender, options) {
    if (validator.isEmpty(gender)) {
      return 'Please, enter valid Gender';
    } else if (!validator.isIn(gender, options)) {
      return 'Please, enter valid Gender';
    }
    return false;
  }

  validatePlan(plan, options) {
    if (validator.isEmpty(plan)) {
      return 'Please, enter valid Plan';
    } else if (!validator.isIn(plan, options)) {
      return 'Please, enter valid Plan';
    }
    return false;
  }
}

const validateFields = new ValidateFields();

export { validateFields };
