// ng-repeat  ng-click filter:sort,order, basic understanding of controllers and modules making functions and registering it to the controller
// individual sort by property

var myApp  = angular
            .module('myApp',[])
            .controller('myScoreBoard',function($scope,$location,$anchorScroll){
                // scoreBoard
                $scope.rowLimit = 4;
               $scope.scrollTo= function(scrollLocation){
                   $location.hash(scrollLocation);
                   $anchorScroll();
               }
                
               const list = [
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",teamName : 'Mumbai Indians', coach:'Mahela Jayawardene', captain:'Rohit Sharma',debut:2008,like:4,dislikes:1,details:"Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League. Founded in 2008, the team is owned by India's biggest conglomerate, Reliance Industries, through its 100% subsidiary IndiaWin Sports.",players:"https://indiabetgames.com/wp-content/uploads/2021/09/Mumbai-Indians-MI-squad-1-967x559.jpg"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",teamName : 'Chennai Super Kings', coach:' Stephen Fleming', captain:'MS Dhoni',debut:2008,like:4,dislikes:10,details:"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai. The team is owned by Chennai Super Kings Cricket Ltd and India Cements is the major stakeholder.",players:"https://img.jagranjosh.com/images/2022/March/2632022/CSK_player_list_2022_stats_past_records.jpg"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Delhi_Capitals_Logo.png/640px-Delhi_Capitals_Logo.png",teamName : 'Delhi Capitals', coach:'Ricky Ponting', captain:'Rishabh Pant',debut:2008,like:7,dislikes:7,details:"Delhi Capitals are a franchise cricket team based out of Delhi in the Indian Premier League. The franchise is jointly owned by the GMR Group and the JSW Group. The team's home ground is Arun Jaitley Stadium, located in New Delhi. The team is captained by Rishabh Pant and coached by Ricky Ponting.",players:"https://english.cdn.zeenews.com/sites/default/files/2022/02/15/1014773-capitalsquadipl.jpg"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",teamName : 'Gujarat Titans', coach:'Ashish Nehra', captain:'Hardik Pandya',debut:2022,like:10,dislikes:4,details:"Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League. Founded in 2021, Gujarat Titans' home ground is Narendra Modi Stadium in Motera. The franchise is owned by CVC Capital Partners.",players:"https://img.cricketworld.com/images/f-107500/team.jpg"},
                    {teamLogo:"https://s3images.zee5.com/wp-content/uploads/2022/01/Capturelshkjsd2022013111314320220131113747.jpg",teamName : 'Lucknow Super Giants', coach:'Andy Flower', captain:'KL Rahul',debut:2022,like:9,dislikes:5,details:"Lucknow Super Giants is a franchise cricket team based in Lucknow, Uttar Pradesh. They play in the Indian Premier League. The Lucknow franchise formed in 2021. Sanjeev Goenka is its principal owner. The team is captained by KL Rahul and coached by Andy Flower.The team mentor is Gautam Gambhir.",players:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/vjmm7cyuikfc9cxw_1646623357.jpeg"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png",teamName : ' Kings IX Punjab', coach:'	Anil Kumble', captain:'	Mayank Agarwal',debut:2022,like:7,dislikes:7,details:"Punjab Kings are a franchise cricket team based in Mohali, Punjab, that plays in the Indian Premier League. Established in 2008 as the Kings XI Punjab, the franchise is jointly owned by Mohit Burman, Ness Wadia, Preity Zinta and Karan Paul. The team plays its home matches at the PCA Stadium, Mohali.",players:'https://www.kreedon.com/wp-content/uploads/2019/12/punjab-kings-pbks-full-squad-for-ipl-2022-1200x900.jpg'},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",teamName : 'Rajasthan Royals', coach:'Kumar Sangakkara', captain:'	Sanju Samson',debut:2008,like:9,dislikes:5,details:"Rajasthan Royals are a franchise cricket team based in Jaipur, Rajasthan, that plays in the Indian Premier League. Founded in 2008 as one of the initial eight IPL franchises, the team is based at the Sawai Mansingh Stadium in Jaipur.",players:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6SNYK2npxYJRt8z1CGJqodQhk5nlNLWMAbuhHPaLVwubr7dBIUvrMoKW_rRUf65xiuQ&usqp=CAU'},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",teamName : 'Kolkata Knight Riders', coach:'Brendon McCullum', captain:'Shreyas Iyer',debut:2008,like:6,dislikes:8,details:"Kolkata Knight Riders are a franchise cricket team representing the city of Kolkata in the Indian Premier League. The franchise is owned by Bollywood actor Shah Rukh Khan, actress Juhi Chawla and her spouse Jay Mehta. The Knight Riders play at the iconic Eden Gardens stadium.",players:"https://english.cdn.zeenews.com/sites/default/files/2022/02/14/1014471-kkrsquadipl.jpg"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",teamName : 'Royal Challengers Bangalore', coach:'Sanjay Bangar', captain:'Faf du Plessis',debut:2008,like:8,dislikes:6,details:"Royal Challengers Bangalore are a franchise cricket team based in Bangalore, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the company's liquor brand Royal Challenge. Since its inception, the team has played its home matches at the M. Chinnaswamy Stadium.",players:"https://images.news18.com/ibnlive/uploads/2020/09/1600266663_ehuf94fumaaywd6.jpg?impolicy=website&width=510&height=356"},
                    {teamLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",teamName : 'Sunrisers Hyderabad', coach:'Tom Moody', captain:'Kane Williamson',debut:2013,like:6,dislikes:8,details:"Sunrisers Hyderabad are a franchise cricket team based in Hyderabad, Telangana, India, that plays in the Indian Premier League. The franchise is owned by Kalanithi Maran of the SUN Group and was founded in 2012 after the Hyderabad-based Deccan Chargers were terminated by the IPL.",players:'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/03/20/Pictures/_37b2d9e8-4b27-11e9-bf2d-62d340f7f10c.jpg'}
                ];
                // won - counter
                $scope.list = list;
                $scope.incrementLikes = function(team){
                    if(team.like<10)
                    team.like++;
                }
                // lost-counter
                $scope.incrementDislikes = function(team){
                    if(team.dislikes<10)
                    team.dislikes++;
                }
               
                $scope.orderByProperty = function(x) {
                    $scope.myOrderBy = x;
                }
                
                $scope.showDetails = function(team){
                    $scope.showTeamDetails = true;
                    $scope.image = team.teamLogo;
                    $scope.Name = team.teamName;
                    $scope.details = team.details; 
                    $scope.teamPicture = team.players;
                }
                $scope.close = function(team){
                    $scope.showTeamDetails = false;  
                }
                $scope.showAllTeams = function()
                {
                    $scope.showAll = true;
                    $scope.rowLimit = 10;
                    
                }
               
});



