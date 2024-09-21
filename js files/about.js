
        function showContent(type) {
            const contentCards = document.getElementById('contentCards');
            contentCards.innerHTML = ''; // Clear existing content
            
            switch (type) {
                case 'personal':
                    contentCards.innerHTML = `
                        <div class="bg-transparent border-2 border-solid border-white rounded-xl">
                            <h2 class="text-3xl font-bold text-white text-center mb-2 mt-2">Personal Information</h2>
                            <p class="text-white m-2">
                                <ul class="text-white m-5 list-inside list-disc text-xl">
                                    <li class="mt-2 mb-2">Name: Swanand Sanjay Kulkarni</li>
                                    <li class="mt-2 mb-2">Birth Date:1 March,2003</li>
                                    <li class="mt-2 mb-2">Age: 21 years old</li>
                                    <li class="mt-2 mb-2">Blood group: A+</li>
                                    <li class="mt-2 mb-2">Gender: Male</li>
                                    <li class="mt-2 mb-2">Address: Palus,Dist-Sangli</li>
                                    <li class="mt-2 mb-2">Nationality: Indian</li>
                                    <li class="mt-2 mb-2">Mobile: +91 9373409250</li>
                               </ul>
                            
                            </p>
                        </div>
                    `;
                    break;
                case 'education':
                    contentCards.innerHTML = `
                        <div class="bg-transparent border-2 border-solid border-white rounded-xl">
                            <h2 class="text-3xl font-bold text-white text-center mb-2 mt-2">Education</h2>
                             <ul class="text-white m-5 list-outside list-disc text-xl p-2">
                                    <li class="mt-2 mb-2 text-center list-none text-yellow-500 text-xl font-extrabold">B.Tech</li>

                                    <li class="mt-2 mb-2">Institute:Annasaheb Dange college of Engineering and Technology,Ashta</li>
                                    <li class="mt-2 mb-2">Course/Branch: CSE</li>
                                    <li class="mt-2 mb-2">Year of Passsing: 2025</li>
                                    <li class="mt-2 mb-2">Aggregate/CGPA: 8.01</li>
                                    <br>
                                    <br>
                                    <li class="mt-2 mb-2 text-center list-none text-yellow-500 text-xl font-extrabold">Diploma</li>

                                    <li class="mt-2 mb-2 text-nowrap">Institute:Government Polytechnic,Miraj </li>
                                    <li class="mt-2 mb-2">Course/Branch: CO</li>
                                    <li class="mt-2 mb-2">Year of Passsing: 2021</li>
                                    <li class="mt-2 mb-2">Aggregate/CGPA: 88.11%</li>
                                    <br>
                                    <br>
                                    <li class="mt-2 mb-2 text-center list-none text-yellow-500 text-xl font-extrabold">X standard</li>

                                    <li class="mt-2 mb-2 text-nowrap break-words">School: Ambika vidhyamandir, Tondoli</li>
                                    <li class="mt-2 mb-2">Year of Passsing: 2019</li>
                                    <li class="mt-2 mb-2">Aggregate/CGPA: 90.80%</li>
                               </ul>
                        </div>
                    `;
                    break;
                case 'hobbies':
                    contentCards.innerHTML = `
                           <div class="bg-transparent border-2 border-solid border-white rounded-xl">
                            <h2 class="text-3xl font-bold text-white text-center mb-2 mt-2">Hobbies</h2>
                          
                                <ul class="text-white m-5 list-inside list-disc text-xl">
                                    <li class="mt-2 mb-2">Swimming</li>
                                    <li class="mt-2 mb-2">Cycling</li>
                                    <li class="mt-2 mb-2">Drawing</li>
                                    <li class="mt-2 mb-2">Playing circket</li>
                                    <li class="mt-2 mb-2">Reading novels</li>
                                    <li class="mt-2 mb-2">Teaching</li>
                                    <li class="mt-2 mb-2">Programming</li>
                                    <li class="mt-2 mb-2">Traveling</li>
                               </ul>
                        
                        </div>
                    `;
                    break;
                default:
                    break;
            }
        }
