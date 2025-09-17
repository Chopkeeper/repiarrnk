exports.ensureAuthenticated = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/auth/login');
};

exports.ensureAdmin = (req, res, next) => {
    if (req.session.user?.role === 'admin') return next();
    res.status(403).send('คุณไม่มีสิทธิ์เข้าถึงหน้านี้');
};
