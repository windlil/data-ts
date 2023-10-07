  
friends = []      
      
def add_friend(name, note=""):      
    friend = {"name": name, "note": note}      
    friends.append(friend)      
    print(f"{name}已添加为好友。")      
        
def delete_friend(name):      
    if name in [friend["name"] for friend in friends]:      
        for friend in friends:      
            if friend["name"] == name:      
                friends.remove(friend)      
                print(f"{name}已从好友列表中删除。")      
                break      
    else:      
        print(f"{name}不是好友。")      
      
 
def note_friend(name, note):      
    if name in [friend["name"] for friend in friends]:      
        for friend in friends:      
            if friend["name"] == name:      
                if note != "":
                    friend["note"] = note      
                print(f"{name}的备注已更新。")      
                break      
    else:      
        print(f"{name}不是好友。")      
      
def show_friends():    
    print("-------------")    
    if not friends:      
        print("好友列表为空。")      
    else:      
        for friend in friends:      
            print(f"{friend['name']}: {friend['note']}")         
    
show_friends()    
while(1):  
    print("*------------------------------------------------------------------------------*")  
    z = int(input("请输入你的操作: 1,添加好友 2，删除好友 3，备注好友 4，展示好友 5,退出:"))    
    if z == 1:    
        x = input("请输入添加的朋友的名字：")    
        y = input("请输入添加的朋友的备注(可不填)：")    
        if y != "":    
            add_friend(x, y)    
            show_friends()  
        else:  
            add_friend(x)  
            show_friends()  
    elif z==2:  
        x = input("请输入删除的朋友的名字：")  
        delete_friend(x)  
        show_friends()  
    elif z==3:  
        x=input("请输入要备注的朋友的名字：")  
        y=input("请输入备注：")  
        if y != "":    
            note_friend(x, y)   
            show_friends()  
        else:  
            print("备注修改失败")  
    elif z==4:  
        show_friends()  
    elif z==5:  
        print("程序退出")
        break
    else:
        print("请输入正确的选项!")