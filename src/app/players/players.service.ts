import { Player } from './player.module';
import { Injectable } from '@angular/core';
import { TeamService } from '../team/team.service';

@Injectable()
export class PlayerService{
    batsmanList=[
        new Player("Virat Kohli","Run Machine",235,12342,93.50,
        "https://www.therahnuma.com/wp-content/uploads/2019/06/278421.jpg","Batsman",
        "https://playerimages.platform.bcci.tv/generic/500x640/164.png",0,
        "Consistency, Runnning between the wickets","Out-swinging deliveries"),

        new Player("Rohit Sharma","Opner Batsman",210,9140,94.50,
        "https://cdn.images.express.co.uk/img/dynamic/68/590x/Rohit-Sharma-565045.jpg","Batsman",
        "https://playerimages.platform.bcci.tv/generic/500x640/107.png",0,
        "Pull shot, big hitting","Swinging deliveries"),

        new Player("Shikhar Dhawan","Opner Batsman",123,5430,91.50,
        "https://www.cricketcountry.com/wp-content/uploads/2016/03/Shikhar-Dhawan-of-India-celebrates-scoring-a-century51.jpg"
        ,"Batsman","https://playerimages.platform.bcci.tv/generic/500x640/41.png",
        0,"playing on the up, full length deliveries","Inability to score century"),

        new Player("Ajinkya Rahane","Oversea Specialist",123,3213,84.50,
        "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/10/20/Photos/Processed/rahane-kXbF--621x414@LiveMint.jpg",
        "Batsman","https://playerimages.platform.bcci.tv/generic/500x640/135.png",
        0,"Overseas","Not suitable for ODI's and T20"),

        new Player("MS Dhoni","Finisher",329,9987,96.50,
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/msdhoni11-770x433.jpeg?dn9EglRPOrB7tQiH03hSQBcbMpDNH2F0",
        "Batsman","https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",0,
        "Captain cool, finisher and stumping","Strikr rate"),

        new Player("Hardik Pandeya","Batsman, Fast bowler",35,1539,114.50,
        "https://www.thehindubusinessline.com/migration_catalog/z74pjd/article22762051.ece/alternates/WIDE_615/BL16NEWECOPANDYA",
        "All Rounder","https://playerimages.platform.bcci.tv/generic/500x640/2740.png",
        54,"Big hitting","Economy rate"),

        new Player("Ravindra Jadeja","Batsman,spin-bowler",210,9140,94.50,
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/PTI12_22_2019_000070B-770x433.jpeg?gU.UcjKl8Hykht.NuRuHykBgM1W5yDQFg",
        "All Rounder","https://playerimages.platform.bcci.tv/generic/500x640/9.png",
        187,"Strong fielding","..."),

        new Player("Bhuvneshwar Kumar","Swing Bowler",210,97,33.53,
        "https://www.cricket.com.au/~/-/media/News/2018/08/28Bhuvi.ashx?w=1600","Bowler",
        "https://playerimages.platform.bcci.tv/generic/500x640/116.png",
        132,"Inswing and outswing","Lack of mixture"),

        new Player("Mohammad Shami","Fast Bowler",85,0,33.43,
        "https://cdn.images.express.co.uk/img/dynamic/68/590x/Rohit-Sharma-565045.jpg","Bowler",
        "https://playerimages.platform.bcci.tv/generic/500x640/94.png",121,"Pace and hit the deck",
        "Bouncy tracks"),

        new Player("Jaspreet Bumra","Death Bowling specialist",73,0,29.54,
        "https://cdn.images.express.co.uk/img/dynamic/68/590x/Rohit-Sharma-565045.jpg","Bowler",
        "https://playerimages.platform.bcci.tv/generic/500x640/1124.png",0,"Yorker and pace",
        "Lack of swing"),

        new Player("Yuzvendra Chahal","Spin Bowler",41,0,38.43,
        "https://cdn.images.express.co.uk/img/dynamic/68/590x/Rohit-Sharma-565045.jpg","Bowler",
        "https://playerimages.platform.bcci.tv/generic/500x640/111.png",0,
        "Control of the ball","Lack of mixture"),

        new Player("Kuldeep Yadav","Spinner",37,0,36.20,
        "https://cdn.images.express.co.uk/img/dynamic/68/590x/Rohit-Sharma-565045.jpg","Bowler",
        "https://playerimages.platform.bcci.tv/generic/500x640/261.png",0,
        "Actions difficult to read","Higher economy rate on small grounds"),
        
    ];

        constructor(private teamService:TeamService){}

    getPlayersList(){
        return this.batsmanList.slice();
    }
    getPlayers(id:number){
        return this.batsmanList[id];
    }

    addPlayerToTeam(player:Player){
        this.teamService.addToTeam(player);
    }

    




}