

export default async function getDataList() {

    const res = await fetch('htttp://exampleurl.com');

    if(!res.ok){
        throw new Error("failed");
    }

    return res.json();
    
}