'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cities', [
      { provinceId: 1, name: 'Ahmadpur East', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Ahmed Nager Chatha', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Ali Khan Abad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Alipur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mailsi', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mianwali', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Muridke', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Narowal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Okara', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Renala Khurd', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Pakpattan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Pattoki', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Qaimpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Qila Didar Singh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Rabwah', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Raiwind', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Rajanpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Pir Mahal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Rahim Yar Khan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Rawalpindi', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sadiqabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Safdarabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sahiwal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sangla Hill', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sarai Alamgir', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sargodha', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Shakargarh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sheikhupura', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sialkot', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Sohawa', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Soianwala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Siranwali', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Talagang', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Taxila', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Toba Tek Singh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Vehari', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Wah Cantonment', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Muzaffargarh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mianwali Bangla', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Murree', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Multan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mian Channu', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mandi Bahauddin', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Mamoori', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Malakwal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Lodhran', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Liaquat Pur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Layyah', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Lalamusa', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Lahore', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jauharabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kot Adu', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Khushab', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kharian', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Khanpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Khanewal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kāmoke', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kamalia', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kasur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Karor Lal Esan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Kalabagh', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jhelum', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jhang', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jaranwala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jampur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Jalalpur Jattan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Haveli Lakha', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Hasilpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Haroonabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Hafizabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Gujar Khan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Gujrat', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Gujranwala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Gojra', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Ghakhar Mandi', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Fateh Jang', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Faisalabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Dipalpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Dinga', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Dina', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Dhaular', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Dera Ghazi Khan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Darya Khan', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Daska', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Chishtian', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Chiniot', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Chichawatni', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Chakwal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Chillianwala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Burewala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Bhakkar', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Bahawalpur', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Bahawalnagar', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Bhalwal', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Bhera', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Attock', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Arifwala', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
      { provinceId: 1, name: 'Wazirabad', createdAt: Sequelize.literal('NOW()'), updatedAt: Sequelize.literal('NOW()') },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  }
};