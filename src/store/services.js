
export default{
      state:{
        WEB_CLIENT_INFO:{
            moqups:[],
            colors:[],
            fonts:[],
            media:[],
            description:"this is a dummy description",
            components:[],
            technologies:[]
        },
        MOBILE_CLIENT_INFO:{
            moqups:[],
            colors:[],
            fonts:[],
            media:[],
            description:"",
            components:[],
            technologies:[]
        },
        DESKTOP_CLIENT_INFO:{
            moqups:[],
            colors:[],
            fonts:[],
            media:[],
            description:"",
            components:[],
            technologies:[]
        },
        UI_DESIGN_CLIENT_INFO:{
            moqups:[],
            colors:[],
            fonts:[],
            media:[],
            description:"",
        }
      },
       mutations:{
        addWebInfo(state,payload){
            let s = state.WEB_CLIENT_INFO
            s.moqups = payload.moqups
            s.colors = payload.colors
            s.fonts = payload.fonts
            s.media = payload.media 
            s.description= payload.description
            s.components = payload.components
            s.technologies = payload.technologies
       }
    },
    actions:{
        
    },
    getters:{
        getWebInfo:state =>  state.WEB_CLIENT_INFO

    }
}