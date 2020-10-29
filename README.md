## Bug fixing: Could not the Services css style in the home page:  
You need to add the className="section-title" to apply the css style to the Title
```
<div className="section-title">
            <h4>{title}</h4>
            <div />
        </div>
)
```


## Visual Studio change to the next line:  
View--> Toggle Word Wrap 
[如何让 Visual Studio Code 自动换行](https://www.zhihu.com/question/35042902)

## Rerun the closed file:  
```
source ~/.bash_profile 
nvm use node 
npm start
```
## If you see some Bugs that tell you Link has a issue, you must change the Link to Link:  
```
    <Link to="/rooms" className="btn-primary">
        our rooms
    </Link>
```

## shortcut to search file in the VS editor:
cmd + P, you will see in the go section in the tool bar:  
[Go To commands](https://tutorials.visualstudio.com/vs-get-started/navigating-code#:~:text=To%20start%20using%20Go%20To,that%20matches%20your%20search%20term.)   

## if you could not see the image show in the picture, you need to go to the Hero.js file to change the code Hero({children,hero}):
```
export default function Hero({children,hero}) {
    return  <header className={hero}>{children}  
        </header>;
```

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
## Bugs The toogle could not display:
You need to make sure that noth in icon import and use it in the button, the spelling of the FaAlignRight
must be correct.   
```
// Navbar.js
import {FaAlignRight} from 'react-icons/fa';
<FaAlignRight className="nav-icon" /> 
```
## Reload the project automically:
[VSC系列 | 自动刷新浏览器——Live Server（插件篇）（十一）](https://blog.csdn.net/weixin_37930716/article/details/104068298)   
### Learning Resources:  
1.Video: [In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)](https://www.youtube.com/watch?v=LXJOvkVYQqA&ab_channel=freeCodeCamp.org)  
2.Source Code:  
[setup-files-react-beach-resort](https://github.com/john-smilga/setup-files-react-beach-resort) 
[react-beach-resort-project](https://github.com/john-smilga/react-beach-resort-project)  
3.[React Learning Journey](http://glennou.cn/2020/08/07/React-Learning/)  
