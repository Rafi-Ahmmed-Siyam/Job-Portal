import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort, search, minSalary, maxSalary) => {
   const [jobs, setJobs] = useState([]);
   const [loding, setLoding] = useState(true)

   // console.log(search)

   useEffect(() => {

      axios.get(`http://localhost:4000/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
         .then(res => {
            setLoding(false);
            setJobs(res?.data);
         })

   }, [sort, search, minSalary, maxSalary])

   return { jobs, loding }
};

export default useJobs;