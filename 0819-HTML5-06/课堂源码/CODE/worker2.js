/**
 * TODO ����Worker��˫��ͨ��
 * TODO Worker�ļ��о���ȫ�ֶ��� - Worker����
 */
//TODO 1.�� onmessage �¼�
addEventListener("message",function(event){
    //TODO a.����HTMLҳ�洫�ݵ���Ϣ
    var value = event.data;
    //TODO b.���ݽ��յ����ݽ��д���
    switch(value){
        case "i am zhangwuji":
            //TODO ���ض�Ӧ����Ϣ
            postMessage("i am xiaona");
            break;
        case "how are you":
            postMessage("how are you too");
            break;
    }
});