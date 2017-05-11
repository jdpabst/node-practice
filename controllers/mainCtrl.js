var account = {
    balance: 5000,
    name: 'Loren'
}




module.exports = {
    getBalance: function(req, res, next){
         return res.status(200).json(account.balance)
    },
    getName: function(req, res, next){
        return res.status(200).json(account.name)
    },
    deposit: function(req, res, next){
        var amount = Number(req.body.amount);
        account.balance += amount;
        return res.status(200).json({amount: amount, balance: account.balance})
    },
    withdraw: function(req, res, next){
        var amount = Number(req.body.amount);
        account.balance -= amount;
        return res.status(200).json({amount: amount, balance: account.balance})
    }
}