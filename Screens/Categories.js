import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, FlatList, TouchableOpacity, Text} from 'react-native';
class Categories extends Component{

    state = {
     
        categories : [
            
            {id : "1", name : "Albert Einstein", image : "https://cdn.mos.cms.futurecdn.net/c7dppKDbG3JXuMfybV5tUX-320-80.jpg"},
            {id : "2", name : "Donald Trump", image : "https://cdn.cnn.com/cnnnext/dam/assets/171204114521-02-donald-trump-12-04-2017-full-169.jpg"},
            {id : "3", name : "Bill Gates", image : "https://images.wsj.net/im-105325?width=620&size=1.5"},
            {id : "4", name : "Napoleon Hill", image : "https://www.toolshero.com/wp-content/uploads/2016/10/napoleon_hill_toolshero-e1505141183188.jpg"},
            {id : "5", name : "Elun Musk", image : "https://api.time.com/wp-content/uploads/2015/05/elon-musk.jpg?w=600&quality=85"},
            {id : "6", name : "Brian Tracey", image : "https://pbs.twimg.com/profile_images/967636564972134400/OiVIYrwE_400x400.jpg"},
            {id : "7", name : "Dale Carnegie", image : "https://www.toolshero.com/wp-content/uploads/dale_carnegie_toolshero.png"},
            {id : "8", name : "Anthony Robbins", image : "https://pbs.twimg.com/profile_images/732642288686391296/II4oQ8i_.jpg"},
            {id : "9", name : "Abraham Lincoln", image : "http://www.chicagonow.com/opinionated-woman/files/2018/06/Abraham_Lincoln_O-77_matte_collodion_print-1.jpg"},
            {id : "10", name : "Robert T. Kiyosaki", image : "https://cdn.thecollegeinvestor.com/wp-content/uploads/2012/10/Robert-Kiyosaki.jpeg"},
            {id : "11", name : "Jim Rohn", image : "https://leadgrowdevelop.com/wp-content/uploads/2015/08/Jim-Rohn.jpg"},
            {id : "13", name : "Anthony Robbins", image : "http://1.bp.blogspot.com/--KEjd_TWyaM/Uv5CrOO1a9I/AAAAAAAAFeE/wEbpKN5wkB0/s1600/Tony+Robbins+-+Pelatih+Sukses+No+1+dii+Dunia.jpg"},
            {id : "14", name : "Dennis Waitley", image : "https://www.mindvalley.com/psychology-of-winning/assets/images/lp/author-lp.jpg"},
            {id : "15", name : "Mark Victor Hansen", image : "https://images4.penguinrandomhouse.com/author/11841"},
            {id : "16", name : "Earl Nightingale", image : "https://alchetron.com/cdn/earl-nightingale-313d2b20-9c3c-4e67-8c27-ece0a3af9ee-resize-750.jpeg"},
            {id : "17", name : "Norman Vincent Peale", image : "https://dailytimes.com.pk/assets/uploads/2019/08/77-norman-vincent-peale-quotes.jpg"},
            {id : "18", name : "Ralph Waldo Emerson", image : "https://www.thoughtco.com/thmb/pXaI77E5Enj21UlxUWNG6AzKDu8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-5155092721-6312e54d713e4a60aa9c9c086206e386.jpg"},
            {id : "19", name : "Robert H. Schuller", image : "https://www.ocregister.com/wp-content/uploads/migration/msm/msmr3o-b781170121z.120130904185946000g341fobt7.2.jpg?w=535"},
            {id : "20", name : "Thomas Edison", image : "https://specials-images.forbesimg.com/imageserve/5db1b252c5382000078148e4/1920x0.jpg?fit=scale"},
            {id : "21", name : "Thomas Jefferson", image : "https://www.thoughtco.com/thmb/VeeEXV_T2WLr3rAAuNpczlBeRwY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-71185844-570423cc5f9b581408b425ba.jpg"},
            {id : "22", name : "W. Clement Stone", image : "https://www.happypublishing.com/blog/wp-content/uploads/2010/07/W-Clement-Stone.jpg"},
            {id : "23", name : "Zig Ziglar", image : "https://cdn.britannica.com/85/164585-050-4BDB0884/Zig-Ziglar-seminar-2009.jpg"},
            {id : "24", name : "Taking Action", image : "http://bloommind.com/wp-content/uploads/2017/04/take_action.jpg"},
            {id : "25", name : "Adversity", image : "http://drvidyahattangadi.com/wp-content/uploads/2019/03/AQ1.jpg"},
            {id : "26", name : "Attitude", image : "https://www.responsesource.com/content/uploads/2016/12/attitude.jpg"},
            {id : "27", name : "Think Big", image : "https://i.pinimg.com/280x280_RS/8c/11/de/8c11deacede2bd1e3160228d65888277.jpg"},
            {id : "28", name : "Goals", image : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11919790.jpg"},
            {id : "29", name : "Learning", image : "https://reachinghighernh.org/wp-content/uploads/2018/07/competency-portfolio-learning.png"},
            {id : "30", name : "Persistence", image : "https://miro.medium.com/max/1200/1*7knIlLxNcPkzCU9E9e8jiQ.jpeg"},
            {id : "31", name : "Preparation", image : "https://www.oetxpert.com/wp-content/uploads/2018/12/CAT-Preparation-2019.jpg"},
            {id : "32", name : "Taking Risks", image : "https://steemitimages.com/DQma7FXGrxn5acpi6Cdvg3HP2SMkLW1vqXAEctaqotBKN6j/18632464_s.jpg"},
            {id : "33", name : "Work", image : "http://fullhdwall.com/wp-content/uploads/2016/08/Work-On-Project.jpg"},
            {id : "36", name : "Motivational", image : "https://www.onlinecultus.com/wp-content/uploads/2018/11/Tips-to-enhance-your-motivation-in-e-Learning.jpg"},
            {id : "37", name : "Leadership", image : "https://prd-mp-images.azureedge.net/b6ef07fe-795f-4129-b198-dbb2438a8e98/image/8aa948a8-cd95-4ec5-aac2-76e28995f2be/modeloftheleader.png"},
            {id : "38", name : "Inspirational", image : "https://s3.amazonaws.com/influencive.com/wp-content/uploads/2019/11/19170005/hiking-3775075_1280-e1574274140979.jpg"},
            {id : "39", name : "Success", image : "https://www.expandgh.com/wp-content/uploads/2019/04/small-business-sucess.jpg"},
            // {id : "40", name : "", image : ""},
        ]
    }
    // renderItemFunction = (data)=>{
    //     return(
    //       <View>
    //         <Image source={require("../assets/images/einstein.jpg")} style={{width:150, height:150}} />
    //         <Text>
    //             {data.item.name}
    //         </Text>
    //       </View>
    //     )
    // }
   
    render(){
      // let Color = "white";
    //   let Color = ?"#1a1a1a":"white";
   //    console.log(this.props);
        return(
           <FlatList numColumns={2}
           columnWrapperStyle={{justifyContent:"space-evenly"}}
           data={this.state.categories}
           renderItem={(data)=>{
               //console.log(data)
            
            return(
                <TouchableOpacity onPress={
                    
                       ()=>{
                           this.props.props.navigation.navigate("QuotesList", {title:data.item.name})
                       }
                    
                } style={{ justifyContent:"center", alignItems:"center", marginTop:5, borderRadius:10, padding:10}}>
                    <View>
                    <Image source={{uri:data.item.image}} style={{width:120, height:120, borderRadius:10}} />
                 
                    </View>
                 <View>
                 <Text style={{fontFamily:"Jaldi-Regular", fontWeight:"bold", color:this.props.color}}>
                     { data.item.name }
                  </Text>
                 </View>
                </TouchableOpacity>
              )
           }}
           />
        )
    }


}
export default Categories;