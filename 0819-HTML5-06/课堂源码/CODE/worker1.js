/**
 * TODO ��ǰ��JS�ļ� - ��ΪWorker�ļ�
 * TODO ���������߼���д�ڵ�ǰ��Worker�ļ���
 */
var num = 0;//TODO ���ڼ����ı���
function postNum(){
    /*
      TODO ������������ݸ�HTMLҳ��
      TODO postMessage()����
      TODO ע��:Worker�ļ�����ȫ�ֶ��� - Worker����
     */
    postMessage(num);
    num++;
    setTimeout(postNum,1000);
}
postNum();