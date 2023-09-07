const validator = {
  isExist: async (schema, match) => {
    if (schema.isNew) {
      // {email:emai@gmail.com}
      const doc = await schema.constructor.findOne(match);
      return doc ? false : true;
    } else {
      match["_id"] = { $ne: schema._id };
      //match = {_id: 123, email:email@gmas.com}
      //id == 1

      const doc = await schema.constructor.findOne(match);
      return doc ? true : false;
    }
  },
  isValidEmail: (email) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
  },
};

export default validator;
