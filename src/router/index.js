
// import Vue from 'vue'
import VueRouter from 'vue-router'
import Layput from '../layout/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import RoleManagement from '../views/rolemgt/index.vue'
import PermissionManagement from '../views/permissionmgt/index.vue'
import UserManagement from '../views/usermgt/index.vue'
import MenuManagement from '../views/menumgt/index.vue'
import DashboardManagement from '../views/dashboardmgt/index.vue'
import SignIn from '../views/signin/index.vue'

export default new VueRouter({
    routes: [
        {   
            name:'main',
            path:'/main',
            component:Layput,
            children: [
                {   
                    name:'dashboard',
                    path:'dashboard',
                    component:Dashboard
                },
                {
                    name:'rolemgt',
                    path:'rolemgt',
                    component:RoleManagement
                },
                {
                    name:'permissionmgt',
                    path:'permissionmgt',
                    component:PermissionManagement
                },
                {
                    name:'usermgt',
                    path:'usermgt',
                    component:UserManagement
                },
                {
                    name:'menumgt',
                    path:'menumgt',
                    component:MenuManagement
                },
                {
                    name:'dashboardmgt',
                    path:'dashboardmgt',
                    component:DashboardManagement
                },
                
            ]
        },
        {
            name:'root',
            path:'/',
            component:SignIn
        },
        {
            name:'signin',
            path:'/signin',
            component:SignIn
        }
        
    ]
})
