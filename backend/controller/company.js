var mongoose = require('mongoose'),
  company = mongoose.model('company'),
  employee = mongoose.model('employee'),
  user = mongoose.model('user'),
  blog = mongoose.model('blog'),
  query = mongoose.model('query');

exports.listAllcompanies = function(req, res) {
  company.find({}, function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};
exports.createcompany = function(req, res) {
  var comp = new company(req.body);
  comp.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readcompany = function(req, res) {
  company.findById(req.params.companyId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updatecompany = function(req, res) {
  company.findOneAndUpdate({_id: req.params.companyId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deletecompany = function(req, res) {
  company.deleteOne({ _id: req.params.companyId
}, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'Company details successfully deleted' });
  });
};

exports.listAllemployee = function(req, res) {
  employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};
exports.createemployee = function(req, res) {
  var emp = new employee(req.body);
  emp.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.reademployee = function(req, res) {
  employee.findById(req.params.employeeId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateemployee = function(req, res) {
  employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deleteemployee = function(req, res) {
  employee.deleteOne({
    _id: req.params.employeeId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'employee details successfully deleted' });
  });
};

exports.listAlluser = function(req, res) {
  user.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.createuser = function(req, res) {
  var us = new user(req.body);
  us.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readuser = function(req, res) {
  user.findById(req.params.userId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateuser = function(req, res) {
  user.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deleteuser = function(req, res) {
  user.deleteOne({
    _id: req.params.userId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'user details successfully deleted' });
  });
};

exports.listAllblog = function(req, res) {
  blog.find({}, function(err, blog) {
    if (err)
      res.send(err);
    res.json(blog);
  });
};
exports.createblog = function(req, res) {
  var bg = new blog(req.body);
  bg.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readblog = function(req, res) {
  blog.findById(req.params.blogId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readblogByUsername = function(req, res) {
  console.log(req.params.wby);
  blog.find({wby:req.params.wby}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.findblogByContain = function(req, res) {
  console.log(req.params.searchVal);
  blog.find({"$or": [{"title":new RegExp(req.params.searchVal, 'i')}, {"description":new RegExp(req.params.searchVal, 'i')}, {"wby":new RegExp(req.params.searchVal, 'i')}]}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateblog = function(req, res) {
  blog.findOneAndUpdate({_id: req.params.blogId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deleteblog = function(req, res) {
  blog.deleteOne({
    _id: req.params.blogId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'blog successfully deleted' });
  });
};

exports.listAllqueries = function(req, res) {
  query.find({}, function(err, query) {
    if (err)
      res.send(err);
    res.json(query);
  });
};
exports.createquery = function(req, res) {
  var qr = new query(req.body);
  qr.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readquery = function(req, res) {
  query.findById(req.params.queryId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};