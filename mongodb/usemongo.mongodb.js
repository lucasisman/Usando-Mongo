use('mongodbVSCodePlaygroundDB');
use('my_first_db');
db.createCollection('students')
db.students.insertMany([
    { name: 'Estudiante 1', home_state: 'California', lucky_number: 3, birthday: { month: 5, day: 15, year: 1995 }, intereses: ['codificación', 'brunch', 'MongoDB'] },
    { name: 'Estudiante 2', home_state: 'Washington', lucky_number: 7, birthday: { month: 7, day: 25, year: 1997 }, intereses: ['brunch', 'MongoDB'] },
    { name: 'Estudiante 3', home_state: 'Washington', lucky_number: 12, birthday: { month: 10, day: 8, year: 1990 }, intereses: ['codificación', 'MongoDB'] },
    { name: 'Estudiante 4', home_state: 'California', lucky_number: 8, birthday: { month: 3, day: 19, year: 1988 }, intereses: ['brunch', 'MongoDB'] },
    { name: 'Estudiante 5', home_state: 'California', lucky_number: 4, birthday: { month: 11, day: 3, year: 1999 }, intereses: ['codificación', 'brunch'] }
])
db.students.find()
db.students.find({ $or: [{ home_state: 'California' }, { home_state: 'Washington' }] })
db.students.find({ lucky_number: { $gt: 3 } })
db.students.find({ lucky_number: { $lte: 10 } })
db.students.find({ lucky_number: { $gte: 1, $lte: 9 } })
db.students.updateMany({}, { $set: { intereses: ['codificación', 'brunch', 'MongoDB'] } })
db.students.updateMany({}, { $push: { intereses: 'impuestos' } })
db.students.updateMany({}, { $pull: { intereses: 'impuestos' } })
db.students.deleteMany({ home_state: 'California' })
db.students.deleteOne({ name: 'Nombre del estudiante' })
db.students.deleteOne({ lucky_number: { $gt: 5 } })
db.students.updateMany({ home_state: 'Washington' }, { $set: { number_of_belts: 0 } })
db.students.updateMany({ home_state: 'Washington' }, { $inc: { number_of_belts: 1 } })
db.students.updateMany({}, { $rename: { number_of_belts: 'belts_earned' } })
db.students.updateMany({}, { $unset: { lucky_number: 1 }, $currentDate: { updated_on: true } })


