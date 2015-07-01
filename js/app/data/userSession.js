/**
 * Created by klauss on 18/06/2015.
 */
angular.module('data').service('userSession', function ($http) {


    this.getUserSessions = function (userid) {
        var alldata = {};
        var sessions = [],
         avgimpression = 0,
            avclicks = 0,
         nrsesiuni;

       return $http.get('http://dojo-analytics-api.elasticbeanstalk.com/api/v1/Paris/datas?&from=2014-05-01T01:00:25.696Z&limit=300&user_id='+userid)
            .then(function(events){
                events = events.data.datas;
               var session = [], lastTime = null, currentTime=null;

               for( i = 0; i < events.length; i++) {

                   if (i === 0) {
                       currentTime = +(new Date(events[i].time));
                       lastTime = currentTime;
                   }

                   else {

                       lastTime = currentTime;
                       currentTime = +(new Date(events[i].time));
                   }

                   if(events[i].data_type != "user locations"){

                       if (currentTime - lastTime < 300000)
                           session.push(events[i]);

                       else {
                           sessions.push(session);
                           session = [];
                           i--;
                       }
                   }




               }

               for(var i = 0; i < events.length; i++)
               {
                   if(events[i].data_type==="idea impression"){
                       avgimpression++;
                   }
                   if(events[i].data_type==="idea click"){
                       avclicks++;
                   }
               }

               nrsesiuni= sessions.length;
               avgimpression=avgimpression/nrsesiuni;
               var avgnrclicks = avclicks/nrsesiuni;
               alldata[0] = sessions;
               alldata[1] = avgimpression;
               alldata[2] = avgnrclicks;

               return alldata;


           });
    };
});