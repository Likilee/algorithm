#include <algorithm>
#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>

using namespace std;

// n: 전화번호목록의 개수
// phone_book: 전화번호목록
// n = 1000000;
// O(n2) 되면 안됨
// 전화번호길이 최대 20

bool solution(vector<string> phone_book) {
    sort(phone_book.begin(), phone_book.end());

    for (vector<string>::iterator it = ++phone_book.begin();
         it != phone_book.end(); it++) {
        vector<string>::iterator it2 = it - 1;
        if (it->find(*it2) == 0)
            return false;
    }
    return true;
}

void printVector(vector<string> &vec) {

    for (vector<string>::iterator it = vec.begin(); it < vec.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
}

#include <cassert>

int main() {
    vector<string> phone_book = {"119", "97674223", "1195524421"};
    vector<string> phone_book2 = {"123", "456", "789"};
    vector<string> phone_book3 = {"88", "12", "123", "1235", "567"};

    string a = "119";
    string b = "9767231";
    string c = "1195524421";

    printVector(phone_book3);
    sort(phone_book3.begin(), phone_book3.end());
    printVector(phone_book3);

    printVector(phone_book2);
    sort(phone_book2.begin(), phone_book2.end());
    printVector(phone_book2);

    printVector(phone_book);
    sort(phone_book.begin(), phone_book.end());
    printVector(phone_book);

    cout << c.compare(a) << endl;
    assert(solution(phone_book) == false);
    assert(solution(phone_book2) == true);
    assert(solution(phone_book3) == false);
}