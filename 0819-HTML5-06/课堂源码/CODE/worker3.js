/**
 * TODO ���ڼ��������հ��Worker�ļ�
 */
//TODO ����HTMLҳ�淢�͵�numֵ
addEventListener("message",function(event){
    //TODO �õ�numֵ
    var num = event.data;
    postNum();
    function postNum(){
        postMessage(num);
        num++;
        setTimeout(postNum,1000);
    }
});