let receiptServices =(()=>{
    function getMyReceipts(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`
        return remote.get('appdata',endpoint,'kinvey');
    }
    function createReceipt() {
        const data = {
            "active": true,
            "productsCount": 0,
            "total": 0
        };
        return remote.post('appdata','receipts','kinvey',data);
    }
    function commitReceipt(receiptId) {
        const endpoint = `receipts/${receiptId}`
        return remote.update('appdata',endpoint,'kinvey')
    }
    function getActive(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;
        return remote.get('appdata',endpoint,'kinvey');
    }
    function getById(receiptId) {
        const endpoint =`receipts/${receiptId}`;
        return remote.get('appdata',endpoint,'kinvey');
    }
    function checkOut(receiptId,productsCount,total) {
        const endpoint =`receipts/${receiptId}`;
        let receipt= getById(receiptId);
        receipt['active'] = false;
        receipt['productsCount'] = productsCount;
        receipt['total'] = total;
        return remote.update('appdata',endpoint,'kinvey',receipt)
    }
    return {
        getMyReceipts,
        createReceipt,
        commitReceipt,
        getActive,
        getById,
        checkOut
    }
    
})()