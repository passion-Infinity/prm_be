module.exports = {
  port: process.env.PORT || 3000,
  mongoURL:
    process.env.MONGO_URL ||
    'mongodb+srv://admin:admin123@cluster0.auvyu.mongodb.net/Admission_University?retryWrites=true&w=majority',
  env: process.env.NODE_ENV || 'development',
};
