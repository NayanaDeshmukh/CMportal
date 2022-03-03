module.exports = function (app) {
  var company = require('./../controller/company');
  // app.route('/')
  //   .get(company.listAllcompanies)
  app.route('/company')
    .get(company.listAllcompanies)
    .post(company.createcompany);
  app.route('/company/:companyId')
    .get(company.readcompany)
    .put(company.updatecompany)
    .delete(company.deletecompany);

  app.route('/employee')
    .get(company.listAllemployee)
    .post(company.createemployee);
  app.route('/employee/:employeeId')
    .get(company.reademployee)
    .put(company.updateemployee)
    .delete(company.deleteemployee);

  app.route('/user')
    .get(company.listAlluser)
    .post(company.createuser);
  app.route('/user/:userId')
    .get(company.readuser)
    .put(company.updateuser)
    .delete(company.deleteuser);

  app.route('/blog')
    .get(company.listAllblog)
    .post(company.createblog);
  app.route('/blog/:blogId')
    .get(company.readblog)
    .put(company.updateblog)
    .delete(company.deleteblog);
    app.route('/blogs/:wby')
    .get(company.readblogByUsername);
    app.route('/blogsearch/:searchVal')
    .get(company.findblogByContain);

  app.route('/query')
    .get(company.listAllqueries)
    .post(company.createquery);
  app.route('/query/:queryId')
    .get(company.readquery)
    
};