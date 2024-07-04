const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/meddetails",{useNewUrlParser: true});
const medicineSchema = new mongoose.Schema({
medicine_name:String,
Dosage: String,
comany: String,
med_type: String,
nooftab: Number,
manu_date: Date,
expiry_date: Date,
Price: Number
});
const medicine = mongoose.model("medicine",medicineSchema);
const paracetamol = new medicine({
medicine_name: "paracetamol",
Dosage: "500 mg",
comany: "Bastol",
med_type: "fever",
nooftab: 10,
manu_date: "2023-01-01",
expiry_date: "2024-04-08",
Price: 30
});
const Dolo_650 = new medicine({
medicine_name: "Dolo-650",
Dosage: "500 mg",
comany: "ficker",
med_type: "fever",
nooftab: 15,
manu_date: "2022-01-01",
expiry_date: "2024-04-08",
Price: 49
});
const solvin_cough = new medicine({
medicine_name: "solvin cough",
Dosage: "500 mg",
comany: "lipa",
med_type: "cold",
nooftab: 10,
manu_date: "2023-02-14",
expiry_date: "2026-04-30",
Price: 99
});
const cofsils = new medicine({
medicine_name: "cofsils",
Dosage: "500 mg",
comany: "lusiana",
med_type: "cold",
nooftab: 10,
manu_date: "2021-06-01",
expiry_date: "2024-04-08",
Price: 29
});
const Gastro_stop_plus = new medicine({
medicine_name: "Gastro-stop plus",
Dosage: "200 mg",
comany: "AST",
med_type: "diarrhoea",
nooftab: 20,
manu_date: "2023-01-01",
expiry_date: "2024-04-08",
Price: 129
});
const Anti_diarrhoea = new medicine({
medicine_name: "Anti-diarrhoea",
Dosage: "2 mg",
comany: "amcal",
med_type: "diarrhoea",
nooftab: 20,
manu_date: "2023-01-01",
expiry_date: "2024-04-08",
Price: 89
});
const German_ache_care_drops = new medicine({
medicine_name: "German ache care drops",
Dosage: "30ml",
comany: "lufia",
med_type: "Stomach ache",
nooftab: 0,
manu_date: "2023-01-01",
expiry_date: "2024-04-08",
Price: 189
});
const Gastro_intestinal_relief = new medicine({
medicine_name: "Gastro-intestinal relief",
Dosage: "100 mg",
comany: "Hevert",
med_type: "Stomach ache",
nooftab: 25,
manu_date: "2023-01-01",
expiry_date: "2024-04-08",
Price: 49
});

medicine.insertMany([paracetamol,Dolo_650,solvin_cough,cofsils,Gastro_stop_plus,Anti_diarrhoea,German_ache_care_drops])
 .then(() => {
    console.log("Successfully saved all the medicine details");
  })
  .catch((err) => {
    if (err.writeErrors && err.writeErrors.length) {
      for (let i = 0; i < err.writeErrors.length; ++i) {
        console.log(err.writeErrors[i]);
      }
    } else {
      console.log(err);
    }
  });




