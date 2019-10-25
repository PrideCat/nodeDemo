#ifndef _MT_SCYLLA_H_
#define _MT_SCYLLA_H_
#include "scylla_types.h"

#ifdef WIN32
#include "ivw/ivw_defines.h"
#endif

#ifdef __cplusplus
extern "C" {
#endif

	int SCYAPI SCYMTInitSession(const char* params, const char* csid, char* result, unsigned int *resultLen, char* reserved);
	typedef int (SCYAPI *Proc_SCYMTInitSession)(const char* params, const char* csid, char* result, unsigned int *resultLen, char* reserved);

#ifndef IOS_CUT
	int SCYAPI SCYMTInitialize(const char* server_addr, const char* appid, int time_out);
	typedef int (SCYAPI *Proc_SCYMTInitialize)(const char* server_addr, const char* appid, int time_out);

	int SCYAPI SCYMTUninitialize(void);
	typedef int (SCYAPI *Proc_SCYMTUninitialize)(void);

	const char* SCYAPI SCYMTSessionBegin(const char* param, int *errorCode);
	typedef const char* (SCYAPI *Proc_SCYMTSessionBegin)(const char* param, int *errorCode);

	int SCYAPI SCYMTSessionEnd(const char* session_id);
	typedef int (SCYAPI *Proc_SCYMTSessionEnd)(const char* session_id);

	int SCYAPI SCYMTCreateRecord(SCY_INST *handle, IFlyReoCallBack func, const char* params, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTCreateRecord)(SCY_INST *handle, IFlyReoCallBack func, const char* params, void* reserved);

	int SCYAPI SCYMTDestroyRecord(SCY_INST *handle, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTDestroyRecord)(SCY_INST *handle, void* reserved);

	int SCYAPI SCYMTAudioWrite(const char* session_id, const char* waveData, unsigned int wavLen , int audioStatus, int *epStatus, int *recogStatus, int * pgStatus , char* resultData,unsigned int *resultLen);
	typedef int (SCYAPI *Proc_SCYMTAudioWrite)(const char* session_id, const char* waveData, unsigned int wavLen , int audioStatus, int *epStatus, int *recogStatus, int * pgStatus , char* resultData,unsigned int *resultLen);

	const char* SCYAPI SCYMTGetResult(const char* session_id, int* rsltStatus, int *errorCode);
	typedef const char* (SCYAPI *Proc_SCYMTGetResult)(const char* session_id, int* rsltStatus, int *errorCode);

	int SCYAPI SCYMTTextPut(const char* session_id, const char* textString, unsigned int textLen);
	typedef int (SCYAPI *Proc_SCYMTTextPut)(const char* session_id, const char* textString, unsigned int textLen);

	const char* SCYAPI SCYMTAudioGet(const char* sessionID, unsigned int* audioLen, int* synthStatus, int* errorCode);
	typedef const char* (SCYAPI *Proc_SCYMTAudioGet)(const char* sessionID, unsigned int* audioLen, int* synthStatus, int* errorCode);

	int SCYAPI SCYMTTranslate(const char* textString, unsigned int textLen, const char* params, char* transData, unsigned int *transLen);
	typedef int (SCYAPI *Proc_SCYMTTranslate)(const char* textString, unsigned int textLen, const char* params, char* transData, unsigned int *transLen);

	int SCYAPI SCYMTNLP(const char* server_addr, const char* appid, const char* textString, unsigned int textLen, const char* params, char* nlpData, unsigned int *dataLen);
	typedef int (SCYAPI *Proc_SCYMTNLP)(const char* server_addr, const char* appid, const char* textString, unsigned int textLen, const char* params, char* nlpData, unsigned int *dataLen);

	int SCYAPI SCYMTHWU(const char* params, const char* textString);
	typedef int (SCYAPI *Proc_SCYMTHWU)(const char* params, const char* textString);
#endif
    
	const char* SCYAPI SCYTTSGetParam(const char* session_id, const char* params, int *errorCode);
	typedef const char* (SCYAPI *Proc_SCYTTSGetParam)(const char* session_id, const char* params, int *errorCode);

	int SCYAPI SCYTTSSetParams(const char* session_id, const char* params, int *errorCode, char* reason);
	typedef int (SCYAPI *Proc_SCYTTSSetParams)(const char* session_id, const char* params, int *errorCode, char* reason);
    
	/**
	* @fn SCYMTInitializeEx
	* @brief initialize interface
	*
	* @return int SCYAPI - Return 0 in success, otherwise return error code.
	* @param void* reserved - [in] reserved, default NULL.
	* @see 
	*/
	int SCYAPI SCYMTInitializeEx(void* reserved);
	typedef int (SCYAPI *Proc_SCYMTInitializeEx)(void* reserved);
	
	/**
	* @fn SCYMTUninitializeEx
	* @brief uninitialize interface
	*
	* @return int SCYAPI - Return 0 in success, otherwise return error code.
	* @param void* reserved - [in] reserved, default NULL.
	* @see 
	*/
	int SCYAPI SCYMTUninitializeEx(void* reserved);
	typedef int (SCYAPI *Proc_SCYMTUninitializeEx)(void* reserved);
	
	/**
	* @fn SCYMTSessionBeginEx
	* @brief Begin a Recognizer/TTS Session
	*
	* Create a recognizer session to recognize audio data or tts session to acquire audio data
	*
	* @return return sessionID of current session, NULL is failed.
	* @param const char* params - [in] parameters when the session created.
	* @param void* reserved - [in] reserved, default NULL.
	* @param int *errorCode - [out] return 0 on success, otherwise return error code.
	* @see 
	*/
	const char* SCYAPI SCYMTSessionBeginEx(const char* param, int *errorCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTSessionBeginEx)(const char* param, int *errorCode, void* reserved);
	
	/**
	* @fn SCYMTAudioWriteEx
	* @brief Write Audio Data to Recognizer Session
	*
	* Writing binary audio data to recognizer.
	*
	* @return const char* SCYAPI - Return recognizer result in success, otherwise return NULL.
	* @param const char* sessionID- [in] The session id returned by recog_begin
	* @param const void* waveData - [in] Binary data of waveform
	* @param unsigned int waveLen - [in] Waveform data size in bytes
	* @param int audioStatus - [in] Audio status, can be
	* @param int *epStatus - [out] ISR epState
	* @param int *recogStatus - [out] ISR RecognizerStatus, see scylla_types.h
	* @param int *errorCode - [out] error code if failed.
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const char* SCYAPI SCYMTAudioWriteEx(const char* sessionID, const char* waveData, unsigned int waveLen , int audioStatus, int *epStatus, int *recogStatus, int* errCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTAudioWriteEx)(const char* sessionID, const char* waveData, unsigned int waveLen , int audioStatus, int *epStatus, int *recogStatus, int* errCode, void* reserved);
	
	/**
	* @fn SCYMTGetResultEx
	* @brief Get Recognize Result in Specified Format
	*
	* Get recognize result in Specified format.
	*
	* @return const char* SCYAPI - Return recognizer result in success, otherwise return NULL.
	* @param const char* sessionID- [in] The session id returned by recog_begin
	* @param int* recogStatus - [out] ISR RecognizerStatus, see scylla_types.h
	* @param int waitTime - [in] wait result time out, unit ms.
	* @param int* errCode - [out] error code if failed.
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const char* SCYAPI SCYMTGetResultEx(const char* session_id, int* recogStatus, int waitTime, int* errCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTGetResultEx)(const char* session_id, int* recogStatus, int waitTime, int* errCode, void* reserved);
	
	/**
	* @fn SCYMTSessionEndEx
	* @brief End a Recognizer/TTS Session
	*
	* End the recognizer/TTS session, release all resource.
	*
	* @return int ISRAPI - Return 0 in success, otherwise return error code.
	* @param const char* sessionID- [in] session id string to end
	* @see 
	*/
	int SCYAPI SCYMTSessionEndEx(const char* session_id);
	typedef int (SCYAPI *Proc_SCYMTSessionEndEx)(const char* session_id);

	int SCYAPI SCYMTSessionDestory(const char* session_id, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTSessionDestory)(const char* session_id, void* reserved);

	/**
	* @fn SCYMTTranslateEx
	* @brief Translate Text
	*
	* Send text content, and got translation text result.
	*
	* @return const char* - Return text result buffer, size returned by SCYMTTranslate_Ex.
	* @param const char* param - [in] parameters when the session created
	* @param const char* textString - [in] text buffer
	* @param unsigned int textLen - [in] text size in bytes
	* @param int* errCode - [out] error code if failed, 0 to success.
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const char* SCYAPI SCYMTTranslateEx(const char* params, const char* textString, unsigned int textLen, int* errCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTTranslateEx)(const char* params, const char* textString, unsigned int textLen, int* errCode, void* reserved);

	/**
	* @fn SCYMTTextPutEx
	* @brief Put Text Buffer to TTS Session
	*
	* Writing text string to synthesizer.
	*
	* @return int SCYAPI - Return 0 in success, otherwise return error code.
	* @param const char* sessionID- [in] The session id returned by sesson begin
	* @param const char* textString - [in] text buffer
	* @param unsigned int textLen - [in] text size in bytes
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	int SCYAPI SCYMTTextPutEx(const char* sessionID, const char* textString, unsigned int textLen, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTTextPutEx)(const char* sessionID, const char* textString, unsigned int textLen, void* reserved);
	
	/**
	* @fn SCYMTAudioGetEx
	* @brief Synthesize text to audio
	*
	* Synthesize text to audio, and return audio information.
	*
	* @return const void* - Return current synthesized audio data buffer, size returned by SCYMTAudioGet_Ex.
	* @param const char* sessionID- [in] session id returned by session begin
	* @param unsigned int* audioLen - [out] synthesized audio size in bytes
	* @param int* synthStatus - [out] synthesizing status
	* @param int* errorCode - [out] error code if failed, 0 to success.
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const void* SCYAPI SCYMTAudioGetEx(const char* sessionID, unsigned int* audioLen, int* synthStatus, int* errorCode, void* reserved);
	typedef const void* (SCYAPI *Proc_SCYMTAudioGetEx)(const char* sessionID, unsigned int* audioLen, int* synthStatus, int* errorCode, void* reserved);

#ifndef IOS_CUT
	PTTSData SCYAPI SCYMTQTTSAudioGetEx(const char* sessionID, int* errorCode, void* reserved);
	typedef PTTSData (SCYAPI *Proc_SCYMTQTTSAudioGetEx)(const char* sessionID, int* errorCode, void* reserved);

	PTVoiceInfo SCYAPI SCYMTQTTSGetVoiceInfo(const char* sessionID, int* infoStatus, int* errorCode, void* reserved);
	typedef PTVoiceInfo (SCYAPI *Proc_SCYMTQTTSGetVoiceInfo)(const char* sessionID, int* infoStatus, int* errorCode, void* reserved);
#endif
    
	/**
	* @fn SCYMTNLPEx
	* @brief NLIC Interpretation process
	*
	* Search text content, and got text result.
	*
	* @return const char* - Return text result buffer, size returned by SCYMTNLP_Ex.
	* @param const char* param - [in] parameters when the session created
	* @param const char* textString - [in] text buffer
	* @param unsigned int textLen - [in] text size in bytes
	* @param int* errCode - [out] error code if failed, 0 to success.
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const char* SCYAPI SCYMTNLPEx(const char* params, const char* textString, unsigned int textLen, int* errCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTNLPEx)(const char* params, const char* textString, unsigned int textLen, int* errCode, void* reserved);

	int SCYAPI SCYMTAuthLogin(const char* params, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTAuthLogin)(const char* params, void* reserved);

	int SCYAPI SCYMTAuthLogout(const char* params, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTAuthLogout)(const char* params, void* reserved);

	int SCYAPI SCYMTPersLogin(const char* params, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTPersLogin)(const char* params, void* reserved);


	/**
	* @fn SCYMTUploadData
	* @brief Upload User Specific Data
	*
	* Upload data such as hotword, etc.
	*
	* @return int ISRAPI - Return 0 in success, otherwise return error code.
	* @param const char* param - [in] parameters about uploading data
	* @param void* data - [in] user data buffer pointer
	* @param unsigned int dataLen - [in] length of data
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	int SCYAPI SCYMTUploadData(const char* params, void* data, unsigned int dataLen, void* reserved);
	typedef int (SCYAPI *Proc_SCYMTUploadData)(const char* params, void* data, unsigned int dataLen, void* reserved);


	/**
	* @fn SCYMTDownloadData
	* @brief Download User Specific Data
	*
	* Upload data such as hotword, etc.
	*
	* @return int ISRAPI - Return user data in success, otherwise return null.
	* @param const char* param - [in] parameters about downloading data
	* @param unsigned int* dataLen - [out] length of data
	* @param nt* errorCode - [out] errcode number
	* @param void* reserved - [in] reserved param, default NULL
	* @see 
	*/
	const void* SCYAPI SCYMTDownloadData(const char* params, unsigned int* dataLen, int* errorCode, void* reserved);
	typedef const void* (SCYAPI *Proc_SCYMTDownloadData)(const char* params, unsigned int* dataLen, int* errorCode, void* reserved);

	/************************************************************************/
	/* 第三方服务调用接口                                                              */
	/************************************************************************/

	const char* SCYAPI SCYMTThirdServer(const char* params, int* errCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTThirdServer)(const char* params, int* errCode, void* reserved);


	/************************************************************************/
	/* 音频处理接口                                                                    */
	/************************************************************************/

	const char* SCYAPI SCYMTAudioCreate(const char* param, int *errorCode, void* reserved);
	typedef const char* (SCYAPI *Proc_SCYMTAudioCreate)(const char* param, int *errorCode, void* reserved);

	const char* SCYAPI SCYMTAudioHandel(const char* sessionID, const char* waveData, unsigned int wavLen , int *epStatus, int* errCode, int* outlen);
	typedef const char* (SCYAPI *Proc_SCYMTAudioHandel)(const char* sessionID, const char* waveData, unsigned int wavLen , int *epStatus, int* errCode, int* outlen);

	int SCYAPI SCYMTAudioDestory(const char* session_id);
	typedef int (SCYAPI *Proc_SCYMTAudioDestory)(const char* session_id);

	/************************************************************************/
	/* 唤醒引擎接口                                                                */
	/************************************************************************/
#ifdef WIN32
	typedef void (*IVW_CallBack)(const char *ivw_result, int result_len, void *userparam);

	int SCYAPI SCYIVWInitialize(const char *pWorkDir);
	typedef int (SCYAPI *Proc_SCYIVWInitialize)(const char *pWorkDir);

	int SCYAPI SCYIVWUninitialize();
	typedef int (SCYAPI *Proc_SCYIVWUninitialize)();

	int SCYAPI SCYIVWCreateInst(WIVW_INST* wIvwInst);
	typedef int (SCYAPI *Proc_SCYIVWCreateInst)(WIVW_INST* wIvwInst);

	int SCYAPI SCYIVWDestoryInst(WIVW_INST wIvwInst);
	typedef int (SCYAPI *Proc_SCYIVWDestoryInst)(WIVW_INST wIvwInst);

	int SCYAPI SCYIVWSetParams(WIVW_INST wIvwInst, const char *param, const char *param_value);
	typedef int (SCYAPI *Proc_SCYIVWSetParams)(WIVW_INST wIvwInst, const char *param, const char *param_value);

	int SCYAPI SCYIVWGetParam(WIVW_INST wIvwInst, const char *param, char *param_value, int *value_len);
	typedef int (SCYAPI *Proc_SCYIVWGetParam)(WIVW_INST wIvwInst, const char *param, char *param_value, int *value_len);

	int SCYAPI SCYIVWStart(WIVW_INST wIvwInst, IVW_RES_SET* resSet, int nRes, IVW_CallBack fun, const char *szFuncType, void *pUserParam);
	typedef int (SCYAPI *Proc_SCYIVWStart)(WIVW_INST wIvwInst, IVW_RES_SET* resSet, int nRes, IVW_CallBack fun, const char *szFuncType, void *pUserParam);

	int SCYAPI SCYIVWStop(WIVW_INST wIvwInst);
	typedef int (SCYAPI *Proc_SCYIVWStop)(WIVW_INST wIvwInst);
/*
	int SCYAPI SCYIVWStop(WIVW_INST wIvwInst);
	typedef int (SCYAPI *Proc_SCYIVWStop)(WIVW_INST wIvwInst);*/

	int SCYAPI SCYIVWAudioWrite(WIVW_INST wIvwInst, char *buf, int buf_len);
	typedef int (SCYAPI *Proc_SCYIVWAudioWrite)(WIVW_INST wIvwInst, char *buf, int buf_len);

	int SCYAPI SCYIVWResourceAdd(const IVW_RES_SET &resSet, const char* szRes, IVW_RES_LOCATION eResLocation, int nResSize);
	typedef int (SCYAPI *Proc_SCYIVWResourceAdd)(const IVW_RES_SET &resSet, const char* szRes, IVW_RES_LOCATION eResLocation, int nResSize);

	int SCYAPI  SCYIVWResourceDel(const IVW_RES_SET &resSet);
	typedef int (SCYAPI *Proc_SCYIVWResourceDel)(const IVW_RES_SET &resSet);

/*
	int SCYAPI SCYIVWResourceSetParams(const IVW_RES_SET& resSet, const char *param, const char *param_value);
	typedef int (SCYAPI *Proc_SCYIVWSetParams)(const IVW_RES_SET& resSet, const char *param, const char *param_value);

	int SCYAPI SCYIVWResourceGetParam(const IVW_RES_SET& resSet, const char *param, char *param_value, int *value_len);
	typedef int (SCYAPI *Proc_SCYIVWGetParam)(const IVW_RES_SET& resSet, const char *param, char *param_value, int *value_len);*/

/*
	int SCYAPI SCYIVWRegisterCallBacks(WIVW_INST wIvwInst, const char *szFuncType ,const PIVWCallBack pFunc ,void *pUserParam);
	typedef int (SCYAPI *Proc_SCYIVWRegisterCallBacks)(WIVW_INST wIvwInst, const char *szFuncType ,const PIVWCallBack pFunc ,void *pUserParam);*/

	int SCYAPI SCYIVWUnregisterCallback(WIVW_INST wIvwInst, const char *szFuncType);
	typedef int (SCYAPI *Proc_SCYIVWUnregisterCallback)(WIVW_INST wIvwInst, const char *szFuncType);
#endif

#ifdef __cplusplus
}
#endif

#endif	// _MT_SCYLLA_H_
