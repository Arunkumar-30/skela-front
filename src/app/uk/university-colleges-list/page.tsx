"use client";

import { useState } from "react";
// Define University type
type University = {
  countryName: string;
  city: string;
  course: string;
  degree: string;
  duration: string;
  intake: string;
  qsrank: string;
  turationFees: string;
  admissionRequire: string;
};
const courses = [
  "Accounting",
  "Advertising",
  "Aerospace Engineering",
  "Ancient History",
  "Animal and Veterinary Studies",
  "Animal Husbandry",
  "Animation",
  "Anthropology",
  "Archaeology",
  "Architecture",
  "Artificial Intelligence",
  "Artificial Intelligence / Machine Learning",
  "Arts / Fine Art",
  "Astronomy",
  "Audio Visual Studies",
  "Automotive Engineering",
  "Banking and Finance",
  "Beauty",
  "Behavioural Science",
  "Biochemistry",
  "Biological Sciences",
  "Biomedical Engineering",
  "Biotechnology",
  "Botany",
  "Broadcast Media",
  "Building Economics",
  "Building Technology",
  "Business Administration",
  "Business Analytics",
  "Business Economics",
  "Business Management",
  "Chemical Engineering",
  "Chemistry",
  "Civil Engineering",
  "Commerce",
  "Computer Engineering",
  "Computer Graphics",
  "Computer Science",
  "Construction Management",
  "Crafts and Textiles",
  "Creative Arts",
  "Creative Writing",
  "Cyber Security",
  "Dance",
  "Data Analytics",
  "Data Science",
  "Dental Studies",
  "Earth Sciences / Geoscience",
  "Economics",
  "Electrical Engineering",
  "Electronics",
  "Engineering Design",
  "Engineering Science",
  "English Language",
  "Environmental Engineering",
  "Environmental Science / Management",
  "Farm and Agribusiness",
  "Fashion Design",
  "Film and TV Production",
  "Fisheries Studies",
  "Food / Agricultural Science",
  "Food and Hospitality",
  "Forensics",
  "Forestry Studies",
  "Game Development",
  "Gender Studies",
  "General Engineering and Technology",
  "Genetics",
  "Geography",
  "Geology",
  "Geomatic Engineering",
  "Graphic and Design Studies",
  "Health Administration",
  "Health Sciences / Administration",
  "Heritage",
  "History",
  "Horticulture and Viticulture",
  "Human Geography",
  "Human Resource Management",
  "Industrial Design",
  "Industrial Engineering",
  "Information Systems",
  "Information Technology",
  "Innovation / Entrepreneurship",
  "Interdisciplinary Studies",
  "Interior Design",
  "International / Global Business",
  "International Relations",
  "Investigations",
  "Journalism",
  "Justice Studies",
  "Landscape Design and Architecture",
  "Language and Literature",
  "Law",
  "Leadership Development",
  "Legal Studies",
  "Librarianship",
  "Linguistic",
  "Literacy and Numeracy",
  "Logistics",
  "Logistics / Supply Chain",
  "Management",
  "Management and Commerce",
  "Manufacturing Engineering",
  "Marine Engineering",
  "Marine Science",
  "Materials and Mineral Engineering",
  "Mathematics",
  "Mechanical Engineering",
  "Media",
  "Media & Communication",
  "Medicine and Medical Studies",
  "Mining Engineering",
  "Music",
  "Nursing and Midwifery",
  "Occupational Health & Safety",
  "Organisation Management",
  "Paramedical Studies",
  "Petroleum Engineering",
  "Pharmacology",
  "Pharmacology / Pharmacy",
  "Pharmacy",
  "Philosophy and Religious Studies",
  "Photography",
  "Physical Sciences",
  "Physics",
  "Physiotherapy",
  "Planning",
  "Political Science",
  "Product Design",
  "Project Management",
  "Psychology",
  "Public Health",
  "Publishing",
  "Radiography",
  "Risk Management",
  "Robotics",
  "Sales and Marketing",
  "Security",
  "Social and Cultural Courses",
  "Social Skills Programmes",
  "Social Work",
  "Sociology",
  "Software Engineering",
  "Speech Pathology",
  "Sport / Exercise Science",
  "Sports Engineering",
  "Sports Management",
  "Statistics",
  "Surveying",
  "Systems Engineering",
  "Teaching / Education Studies",
  "Theatre",
  "Tourism",
  "Web Development",
  "Zoology",
];
const years = [
  "SEP 2024",
  "OCT 2024",
  "NOV 2024",
  "DEC 2024",
  "JAN 2025",
  "FEB 2025",
  "MAR 2025",
  "APR 2025",
  "MAY 2025",
];
// Arrays for City and Duration options
const cities = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "london", label: "London" },
  { value: "australia", label: "Australia" },
  { value: "new-zealand", label: "New Zealand" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "europe", label: "Europe" },
  { value: "asia-africa-uae", label: "Asia, Africa & UAE" },
];

const durations = [
  { value: "12-months", label: "12 Months" },
  { value: "18-months", label: "18 Months" },
  { value: "21-months", label: "21 Months" },
  { value: "24-months", label: "24 Months" },
  { value: "36-months", label: "36 Months" },
  { value: "48-months", label: "48 Months" },
  { value: "60-months", label: "60 Months" },
];
// Array for Degree options
const degrees = [
  { value: "pg-diploma", label: "PG Diploma/Certificate" },
  { value: "phd", label: "Ph.D" },
  { value: "masters", label: "Master" },
  {
    value: "ug-diploma",
    label: "UG Diploma/Certificate/Associate Certificate",
  },
  { value: "ug-pg", label: "UG+PG (Associated) Degree" },
  { value: "bachelor", label: "Bachelors" },
];
const universityList: University[] = [
  {
    countryName: "University of The Arts London",
    city: "london",
    course: "media-&-communication",
    degree: "bachelor",
    duration: "36-months",
    intake: "sep-2024",
    qsrank: "2",
    turationFees: "27.58L/yr",
    admissionRequire: "IELTS:7",
  },
  {
    countryName: "University of Cambridge",
    city: "cambridge",
    course: "psychology",
    degree: "masters",
    duration: "24-months",
    intake: "jan-2025",
    qsrank: "2",
    turationFees: "24.65L/yr",
    admissionRequire: "IELTS:7.5",
  },
  {
    countryName: "University of Oxford",
    city: "oxford",
    course: "data-science",
    degree: "masters",
    duration: "24-months",
    intake: "jan-2025",
    qsrank: "4",
    turationFees: "40.64L/yr",
    admissionRequire: "IELTS:7.5",
  },
  {
    countryName: "Emily Carr University",
    city: "canada",
    course: "web-development",
    degree: "bachelor",
    duration: "36-months",
    intake: "sep-2024",
    qsrank: "24",
    turationFees: "-/-",
    admissionRequire: "IELTS:9",
  },
  {
    countryName: "The University of Melbourne",
    city: "australia",
    course: "business-administration",
    degree: "masters",
    duration: "24-months",
    intake: "may-2025",
    qsrank: "33",
    turationFees: "20.73L/yr",
    admissionRequire: "IELTS:6.5",
  },
];
const UkUniversityList = () => {
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [duration, setDuration] = useState("");
  const [intake, setIntake] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = universityList.filter((univ) => {
      return !city || univ.city === city;
    });

    console.log("filtered", filtered); // ✅ Log after filtering
    setFilteredUniversities(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl mb-4 text-center">Find Top Universities</h1>
      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Degree</option>
          {degrees.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Course</option>
          {courses.map((c, i) => (
            <option key={i} value={c.toLowerCase().replace(/\s+\/?/g, "-")}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Duration</option>
          {durations.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        {/* Intake */}
        <div>
          <label className="block mb-1 font-medium">Intake</label>
          <select
            value={intake}
            onChange={(e) => setIntake(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Intake</option>
            {years.map((intakeOption) => (
              <option
                key={intakeOption}
                value={intakeOption.toLowerCase().replace(/\s+/g, "-")}
              >
                {intakeOption}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-2"
        >
          Search
        </button>
      </form>

      <div className="mt-10 space-y-6">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((univ, i) => (
            <div key={i} className="p-4 border rounded shadow bg-white">
              <h3 className="text-xl font-bold">{univ.countryName}</h3>
              <p>City: {univ.city}</p>
              <p>QS Rank: {univ.qsrank}</p>
              <p>Fees: {univ.turationFees}</p>
              <p>Admission Requirement: {univ.admissionRequire}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No universities found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UkUniversityList;
