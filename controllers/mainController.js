const { sendEmail, sendContactEmail } = require("../services/email");

exports.home = async (req, res) => {
  try {
    console.log(req.body);

    const {
      fullName,
      email,
      applicationMode,
      phoneNumber,
      message,
      recipientEmail,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !applicationMode ||
      !phoneNumber ||
      !message ||
      !recipientEmail
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all details",
      });
    }

    const templateData = {
      fullName,
      email,
      applicationMode,
      phoneNumber,
      message,
    };

    await sendEmail(recipientEmail, templateData);

    return res.status(200).json({
      status: true,
      message: "Message sent!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!!",
    });
  }
};

exports.contact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      message,
      recipientEmail,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !message ||
      !recipientEmail
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all details",
      });
    }

    const templateData = {
      fullName,
      email,
      message,
    };

    await sendContactEmail(recipientEmail, templateData);

    return res.status(200).json({
      status: true,
      message: "Message sent!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!!",
    });
  }
};

exports.applicationForm = async (req, res) => {
  try {
    console.log(req.body);

    const {
      recipientEmail,
      
      study_destination,
       programme_type,
       preferred_institutionone,
       preferred_institutiontwo,
       study_courseone,
      study_coursetwo,
      start_month,
      
     
      student_name,
      student_dob,
       student_gender,
      student_details_nationality,
      student_address,
        student_city,
      student_phonenumber,
      student_email,
      
      highschool_startmonth,
      highschool_endmonth,
      highschool_name,
       certificate_obtained,
      
     tertiary_institution,
       course_studied,
       tertiary_startdate,
       tertiary_enddate,
     result_grade,
      
      parent_name,
     parent_gender,
    parent_nationality,
    parent_address,
    parent_city,
    parent_phonenumber,
    parent_email,
    guardian_legalage,
      
     contact_name,
    contact_gender,
    contact_nationality,
     contact_address,
     contact_city,
     contact_phonenumber,
      contact_email,
      
     dismissal_status,
     crime_status,
      visa_denial,
      
       annual_fund,
       sponsor_type,
      
      test_date,
      test_type,
      test_score,
    } = req.body;

    if (
      !recipientEmail ||
      !academic_preference_study_destination ||
      !academic_preference_programme_type ||
      !academic_preference_prefferred_institute_first ||
      !academic_preference_prefferred_institute_second ||
      !academic_preference_study_course_first ||
      !academic_preference_study_course_second ||
      !academic_preference_start_month ||
      !student_details_fullname ||
      !student_details_dob ||
      !student_details_gender ||
      !student_details_nationality ||
      !student_details_address ||
      !student_details_city ||
      !student_details_phone ||
      !student_details_email ||
      !education_history_high_school_start ||
      !education_history_high_school_end ||
      !education_history_high_school_name ||
      !education_history_high_school_certificate ||
      !education_history_tertiary_institution ||
      !education_history_course_studied ||
      !education_history_start_date ||
      !education_history_end_date ||
      !education_history_grade ||
      !guardian_details_fullname ||
      !guardian_details_gender ||
      !guardian_details_nationality ||
      !guardian_details_address ||
      !guardian_details_city ||
      !guardian_details_phoneNumber ||
      !guardian_details_email ||
      !guardian_details_guardian_age ||
      !emergency_contact_fullname ||
      !emergency_contact_gender ||
      !emergency_contact_nationality ||
      !emergency_contact_address ||
      !emergency_contact_city ||
      !emergency_contact_phone ||
      !emergency_contact_email ||
      !crimainal_record_dismissed ||
      !crimainal_record_convicted ||
      !crimainal_record_denied_visa ||
      !financial_info_annual_fund ||
      !financial_info_responsibility ||
      !standard_testing_date ||
      !standard_testing_test_type ||
      !standard_testing_score
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all details",
      });
    }

    const templateData = {
      academic_preference_programme_type,
      academic_preference_study_destination,
      academic_preference_prefferred_institute_first,
      academic_preference_prefferred_institute_second,
      academic_preference_study_course_first,
      academic_preference_study_course_second,
      academic_preference_start_month,
      student_details_fullname,
      student_details_dob,
      student_details_gender,
      student_details_nationality,
      student_details_address,
      student_details_city,
      student_details_phone,
      student_details_email,
      education_history_high_school_start,
      education_history_high_school_end,
      education_history_high_school_name,
      education_history_high_school_certificate,
      education_history_tertiary_institution,
      education_history_course_studied,
      education_history_start_date,
      education_history_end_date,
      education_history_grade,
      guardian_details_fullname,
      guardian_details_gender,
      guardian_details_nationality,
      guardian_details_address,
      guardian_details_city,
      guardian_details_phoneNumber,
      guardian_details_email,
      guardian_details_guardian_age,
      emergency_contact_fullname,
      emergency_contact_gender,
      emergency_contact_nationality,
      emergency_contact_address,
      emergency_contact_city,
      emergency_contact_phone,
      emergency_contact_email,
      crimainal_record_dismissed,
      crimainal_record_convicted,
      crimainal_record_denied_visa,
      financial_info_annual_fund,
      financial_info_responsibility,
      standard_testing_date,
      standard_testing_test_type,
      standard_testing_score,
    };

    await sendApplicationEmail(recipientEmail, templateData);

    return res.status(200).json({
      status: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!!",
    });
  }
};
