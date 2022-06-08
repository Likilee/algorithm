#include <iostream>
#include <map>
#include <sstream>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<string> operations) {
    multimap<int, int> map;
    vector<int> answer;

    for (vector<string>::iterator curr = operations.begin();
         curr != operations.end(); ++curr) {
        const char operand = (*curr)[0];
        stringstream ssInt((*curr).substr(2));
        int data;
        ssInt >> data;

        if (operand == 'I') {
            map.insert(make_pair(data, data));
        } else if (map.size() > 0) {
            if (data > 0)
                map.erase(--map.end());
            else
                map.erase(map.begin());
        }
    }
		if (map.size() == 0) {
			answer.assign(2,0);
		}
		else {
			answer.push_back((*--(map.end())).first);
			answer.push_back((*map.begin()).first);
		}
    return answer;
}

int main() {
    vector<string> operations = {"I -1321312", "I 2"};
    cout << *operations.begin() << endl;

		cout << solution(operations) << endl;
}