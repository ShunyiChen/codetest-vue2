<template>
  
    <el-container
      style="
        height: 100%; 
      "
    >
      <el-header style="height: 80px; ">
       <el-row>
        <el-col :span="12">
            <img
              alt="Vue logo"
              src="../assets/20170526-EY-Digital-Brand.svg"
              height="76px"
            />
        </el-col>
      
        <el-col :span="12" style="text-align: right;">
            <img
              alt="My profile"
              src="../assets/myprofile.png"
              height="76px"
            />
 
            Simeon Chen
    
            <router-link active-class="active" :to="{
                        name:'signin'
                  }"> 
              <el-link type="primary">退出</el-link>
            </router-link>
          
        </el-col>
      </el-row>
        
        
      </el-header>

      <el-container>
        <el-aside>
          <el-menu :default-openeds="['1', '2']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>Home</template
              >
              <el-menu-item-group>
                <template slot="title">Analysis</template>
                
                <el-menu-item index="1-1">
                  <router-link active-class="active" :to="{
                    name: 'dashboard'
                  }">Dashboard</router-link>
                </el-menu-item>
                <!-- <el-menu-item index="1-1">Dashboard</el-menu-item> -->


              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>System Settings</template>
              <el-menu-item-group>
                <template slot="title">Permissions and roles</template>
                <!-- <el-menu-item index="2-1">Role management</el-menu-item> -->
                <el-menu-item index="2-1">
                  <router-link active-class="active" :to="{
                    name:'rolemgt'
                  }">
                    Role management</router-link></el-menu-item>
                <el-menu-item index="2-2">
                  <router-link active-class="active" :to="{
                    name:'permissionmgt'
                  }">
                  Permission management</router-link></el-menu-item>
                <el-menu-item index="2-3">
                  <router-link active-class="active" :to="{
                    name:'usermgt'
                  }">
                  User management</router-link></el-menu-item>
                <el-menu-item index="2-4">
                  <router-link active-class="active" :to="{
                    name:'menumgt'
                  }">
                  Menu management</router-link></el-menu-item>
                <el-menu-item index="2-5">
                  <router-link active-class="active" :to="{
                    name:'dashboardmgt'
                  }">
                  Dashboard management</router-link></el-menu-item>
              </el-menu-item-group>
              
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>

          <el-footer>Footer</el-footer>

        </el-container>
      </el-container>
    </el-container>
 
</template>

<script>
  // import Dashboard from "../views/dashboard/index.vue";
  export default {
    name: "Layout",
    data() {
      return {
      };
    },
    mounted(){
    },
    methods: {
    },
    components: {
      // Dashboard
    }
  };
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>