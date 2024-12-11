import customers from './customer.js';  // 顧客データをインポート

$(document).ready(function() {
    /**
     * 前提：
     * customersにcustomer.jsで記述されて顧客情報が入っています。
     */

    /**
     * 問題 1: 顧客情報をテーブルに挿入する
     * 
     * createCustomerTable()を使って顧客情報を適切な位置に表示してください
     */
    createCustomerTable();

    /**
     * 顧客情報テーブルを作成する関数
     * @param {Array} users - 顧客情報の配列
     * - 指定された顧客データをテーブルに挿入します。
     */
    function createCustomerTable() {
        const customerTableBody     = document.getElementById('customer-table-body');   //顧客テーブル(customer-table-body)情報を取得
        customerTableBody.innerHTML = ''; // テーブルの内容を初期化

        forEach( => {
            // テーブルを一行ずつ作成します
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="customer_id" id="">${user}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `;
            customerTableBody.appendChild(row); // 各行をテーブルに追加
        });
    }

    /**
     * 問題 2: テーブルの顧客IDをクリックしたときに詳細を表示
     * - 顧客の詳細情報を右側のパネルなどに表示します。
     * - 顧客IDを基に顧客データを検索して表示します。
     */
    $('#customer-table-body').on('click', '.customer_id', function() {
        // ユーザーIDの取得
        const userId = $(this).attr('id');  //クリックしたユーザーのidデータを取得
        const user   = customers.find(customer => customer.id === Number(userId));  //検索

        // 顧客詳細を表示
        if () {
            document.getElementById('user-name').textContent    = ;
            document.getElementById('user-age').textContent     = ;
            document.getElementById('user-address').textContent = ;
            document.getElementById('user-phone').textContent   = ;
            document.getElementById('user-rank').textContent    = ;
        } else {
            alert('指定したIDの顧客が見つかりません');
        }
    });

    /**
     * 問題 3: ランクでの絞り込み機能
     * - セレクトボックスで選択されたランクに基づいて顧客データを絞り込みます。
     * - 選択されたランクに応じて、該当する顧客をテーブルに表示します。
     */
    $('#rank').on('change', function () {
        let filteredCustomers = [];
        const selectRank      = $(this).val(); // セレクトボックスで選択されたランクを取得

        if (selectRank === 'all') {
            // "all"が選択された場合、すべての顧客を表示
            createCustomerTable();
            return;
        } else {
            // 選択されたランクに一致する顧客をフィルタリング
            filteredCustomers = customers.filter(function() {
                return customer.rank === selectRank;
            });
        }

        createCustomerTable(filteredCustomers); // 絞り込んだ顧客データをテーブルに表示
    });

    /**
     * 問題 4: 検索機能
     * - 入力されたキーワードに基づいて、住所に一致する顧客データを検索します。
     * - 検索結果をテーブルに表示します。
     */
    $('#search-input').on('input', function() {
        const searchTerm        = $(this).val().toLowerCase();  // 入力された文字列を小文字に変換
        const filteredCustomers = filter( => {
            // 住所にキーワードが含まれているかを確認
            return toLowerCase().includes(searchTerm);
        });

        createCustomerTable(filteredCustomers); // 絞り込んだ結果をテーブルに表示
    });

    
});
