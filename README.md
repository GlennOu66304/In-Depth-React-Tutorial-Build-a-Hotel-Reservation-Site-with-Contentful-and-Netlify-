## Bug fixing, while install the npx create-react-app resort,"error @svgr/webpack@5.4.0: The engine "node" is incompatible with this module. Expected version ">=10". Got "8.17.0"
1.Use the NVM shift the node to the latest version;  
```
source ~/.bash_profile 
nvm use node 
```
Now using node v14.14.0 (npm v6.14.8)  
[使用nvm管理node与npm版本](https://juejin.im/post/6844903861157642247)   
2.install the npx create-react-app resort 
```
npx create-react-app resort 
```
## move the a project into the Github:   
1. Create a project, then git clone it into the local.    
2. copy every file from the exiten project into the new project from github.   
3. run the script below to begin the project:  
```
source ~/.bash_profile 
nvm use node  
npm start
```



### Learning Resources:  
1.Video: [In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)](https://www.youtube.com/watch?v=LXJOvkVYQqA&ab_channel=freeCodeCamp.org)  
2.Source Code:  
[setup-files-react-beach-resort](https://github.com/john-smilga/setup-files-react-beach-resort) 
[react-beach-resort-project](https://github.com/john-smilga/react-beach-resort-project)  
3.[React Learning Journey](http://glennou.cn/2020/08/07/React-Learning/)  
