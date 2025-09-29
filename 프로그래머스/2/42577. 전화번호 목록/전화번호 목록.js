function solution(phone_book) {
    phone_book.sort()
    for(const [idx,num] of phone_book.entries()) {
        if(idx < phone_book.length -1) {
            if(phone_book[idx+ 1].startsWith(num)) {
                return false
            }
        }
    }
    return true
}