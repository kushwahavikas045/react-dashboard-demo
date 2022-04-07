export const WriteAccessPermission = (permission, email, localStorageData) =>{
const userData = localStorageData.filter((storedData) => storedData.email === email);
if(userData.length === 0){
    permission = false;
}
if(userData.length > 0){
    userData.map((interData) =>{
        if(interData.options.post == true){
            permission = true
        }
    })
}
return permission;
}

export const updateAccessPermission = (permission, email, localStorageData) =>{
    const userData = localStorageData ? localStorageData.filter((storedData) => storedData.email === email) : [];
    userData.map((interData) =>{
        if(interData.options.update == true){
            permission = true;
        }
    })

    return permission;
}

export const deleteAccessPermission = (deletePermission, email, localStorageData) =>{
    const userData = localStorageData ? localStorageData.filter((storedData) => storedData.email === email) : [];
    userData.map((interData) =>{
        if(interData.options.delate == true){
            deletePermission = true;
        }
    })

    return deletePermission;
}