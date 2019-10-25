#ifndef __SCYLLA_TYPES_H__
#define __SCYLLA_TYPES_H__


#if defined(_MSC_VER)            /* Microsoft Visual C++ */
#if !defined(SCYAPI)
#define SCYAPI __stdcall
#endif
#pragma pack(push, 8)
#define snprintf _snprintf
#elif defined(__BORLANDC__)      /* Borland C++ */
#if !defined(SCYAPI)
#define SCYAPI __stdcall
#endif
#pragma option -a8
#elif defined(__WATCOMC__)       /* Watcom C++ */
#if !defined(SCYAPI)
#define SCYAPI __stdcall
#endif
#pragma pack(push, 8)
#else                            /* Any other including Unix */
#if !defined(SCYAPI)
#define SCYAPI
#endif
#endif


typedef void* SCY_INST;	/*录音实例*/

typedef void* pIvwInterface;/*唤醒接口实例*/

typedef void* WIVW_INST;/*唤醒函数实例*/

typedef void (*IFlyReoCallBack)(const char * data,int audiolength ,int epStatus , int errCode, void *reserved);/*录音回调*/

typedef void (*IVW_CallBack)(const char *ivw_result, int result_len, void *userparam); 

enum
{
	SCY_IAT = 0,
	SCY_NLP,
	SCY_IATNLP,
};

const char* const scytype[] =
{
	"iat",		// 转写
	"nlp",		// 语义
	"iatnlp",	//	转写+语义
};

enum
{
	SCY_RAW = 0,
	SCY_SPEEX,
	SCY_SPEEX_WB,
};
const char* const rawtype[] =
{
	"raw",			// 原始格式
	"speex",		// speex压缩
	"speex-wb",		// speex宽字符压缩
};

enum
{
	audio_format_default = 0,
	audio_format_pcm8k,
	audio_format_pcm16k,
};
const char* const audio_info[] =
{
	"audio/L16;rate=16000",
	"audio/L16;rate=8000",
	"audio/L16;rate=16000",

};

/**
 *  SCYSampleStatus indicates how the sample buffer should be handled
 *  SCY_AUDIO_SAMPLE_FIRST		- The sample buffer is the start of audio
 *								  If recognizer was already recognizing, it will discard
 *								  audio received to date and re-start the recognition
 *  SCY_AUDIO_SAMPLE_CONTINUE	- The sample buffer is continuing audio
 *  SCY_AUDIO_SAMPLE_LAST		- The sample buffer is the end of audio
 *								  The recognizer will cease processing audio and
 *								  return results
 *  Note that sample statii can be combined; for example, for file-based input
 *  the entire file can be written with SAMPLE_FIRST | SAMPLE_LAST as the
 *  status.
 *  Other flags may be added in future to indicate other special audio
 *  conditions such as the presence of AGC
 */
enum
{
	SCY_AUDIO_SAMPLE_INIT           = 0x00,
    SCY_AUDIO_SAMPLE_FIRST          = 0x01,
    SCY_AUDIO_SAMPLE_CONTINUE       = 0x02,
    SCY_AUDIO_SAMPLE_LAST           = 0x04,
	SCY_AUDIO_SAMPLE_COMPLETE       = 0x05,
};

/*
 *  The enumeration SCYRecognizerStatus contains the recognition status
 *  SCY_REC_STATUS_SUCCESS				- successful recognition with partial results
 *  SCY_REC_STATUS_NO_MATCH				- recognition rejected
 *  SCY_REC_STATUS_INCOMPLETE			- recognizer needs more time to compute results
 *  SCY_REC_STATUS_NON_SPEECH_DETECTED	- discard status, no more in use
 *  SCY_REC_STATUS_SPEECH_DETECTED		- recognizer has detected audio, this is delayed status
 *  SCY_REC_STATUS_COMPLETE				- recognizer has return all result
 *  SCY_REC_STATUS_MAX_CPU_TIME			- CPU time limit exceeded
 *  SCY_REC_STATUS_MAX_SPEECH			- maximum speech length exceeded, partial results may be returned
 *  SCY_REC_STATUS_STOPPED				- recognition was stopped
 *  SCY_REC_STATUS_REJECTED				- recognizer rejected due to low confidence
 *  SCY_REC_STATUS_NO_SPEECH_FOUND		- recognizer still found no audio, this is delayed status
 */
enum
{
	SCY_REC_STATUS_SUCCESS              = 0,
	SCY_REC_STATUS_NO_MATCH             = 1,
	SCY_REC_STATUS_INCOMPLETE			= 2,
	SCY_REC_STATUS_NON_SPEECH_DETECTED  = 3,
	SCY_REC_STATUS_SPEECH_DETECTED      = 4,
	SCY_REC_STATUS_COMPLETE				= 5,
	SCY_REC_STATUS_MAX_CPU_TIME         = 6,
	SCY_REC_STATUS_MAX_SPEECH           = 7,
	SCY_REC_STATUS_STOPPED              = 8,
	SCY_REC_STATUS_REJECTED             = 9,
	SCY_REC_STATUS_NO_SPEECH_FOUND      = 10,
	SCY_REC_STATUS_FAILURE = SCY_REC_STATUS_NO_MATCH,
};

/**
 * The enumeration SCYepState contains the current endpointer state
 *  SCY_EP_LOOKING_FOR_SPEECH	- Have not yet found the beginning of speech
 *  SCY_EP_IN_SPEECH			- Have found the beginning, but not the end of speech
 *  SCY_EP_AFTER_SPEECH			- Have found the beginning and end of speech
 *  SCY_EP_TIMEOUT				- Have not found any audio till timeout
 *  SCY_EP_ERROR				- The endpointer has encountered a serious error
 *  SCY_EP_MAX_SPEECH			- Have arrive the max size of speech
 */
//enum
//{
//	SCY_EP_LOOKING_FOR_SPEECH   = 0,
//	SCY_EP_IN_SPEECH            = 1,
//	SCY_EP_AFTER_SPEECH         = 3,
//	SCY_EP_TIMEOUT              = 4,
//	SCY_EP_ERROR                = 5,
//	SCY_EP_MAX_SPEECH           = 6,
//	SCY_EP_IDLE                 = 7  // internal state after stop and before start
//};

// EP状态
enum
{
	ISR_EP_LOOKING_FOR_SPEECH   = 0,  //未检测到前端点
	ISR_EP_IN_SPEECH            = 1,  //有效音频中
	ISR_EP_BEFORE_SPEECH        = 2,  //检测到前端点
	ISR_EP_AFTER_SPEECH         = 3,  //检测到后端点
	ISR_EP_TIMEOUT              = 4,  //检测端点超时
	ISR_EP_ERROR                = 5,
	ISR_EP_MAX_SPEECH           = 6,
	ISR_EP_IDLE                 = 7  // internal state after stop and before start
};

/* Synthesizing process flags */
enum
{
    SCY_TTS_FLAG_STILL_HAVE_DATA        = 1,
    SCY_TTS_FLAG_DATA_END               = 2,
    SCY_TTS_FLAG_CMD_CANCELED           = 4,
};

#define MAX_PATH_LEN 512
enum {
	FILE_TYPE_FD = 1,
	FILE_TYPE_FO
};
typedef struct _resFileInfo{
	int offset;
	int type;
	unsigned int file_len;
	union {
		unsigned int fd;
		char filePath[MAX_PATH_LEN];
	}info;
}resFileInfo;


/*
 * Basic Data Types
 */

/* Integer types */
typedef long int            TTSINT32;
typedef short               TTSINT16;

/* Handles */
typedef void*               HTTSINSTANCE;
typedef TTSINT32            HTTSUSERLIB;

/* Char type */
typedef char                TTSCHAR;
typedef char*               PTTSCHAR;

/* Cardinal types */
#define TTSVOID             void
#define PTTSVOID            void*

typedef unsigned char       TTSUNS8;
typedef unsigned long int   TTSUNS32;
typedef unsigned short      TTSU16;
typedef float               TTSFLOAT;
typedef unsigned long       TTSDWORD;
typedef unsigned short      TTSWORD;

/* Boolean */
typedef unsigned int        TTSBOOL;


/** 
 * @class    TTSData
 * @brief    TTSData structure
 * The structure used in synthesizing process
 */
#pragma pack(push, 2)
typedef struct tagTTSData
{
    TTSDWORD    dwServiceID;    /* [in]  Connect's service ID */
    TTSDWORD    dwInBufSize;    /* [in]  Text buffer size */
    TTSDWORD    dwOutBufSize;   /* [out] Output audio data length */
    TTSDWORD    dwInFlags;      /* [in]  Input data flag */
    TTSDWORD    dwOutFlags;     /* [out] Output data flag */
    TTSWORD     wAudioHeadLen;  /* [out] Output audio data head length */
#ifndef WIN32
    TTSWORD     wReserved;      /* [in/out] Reserved for alignment */
#endif
    TTSDWORD    dwCurStart;     /* [out] The start position of current synthesizing text in szInBuf */
    TTSDWORD    dwCurEnd;       /* [out] The end position of current synthesizing text in szInBuf */
    TTSDWORD    dwErrorCode ;   /* [out] The error code returned by service module */

    TTSCHAR     *szInBuf;       /* [in]  Input text buffer pointer, allocated by caller */
    PTTSVOID    pOutBuf;        /* [out] Output audio data pointer, allocated by TTS service module */
    PTTSCHAR    pszPYBuf;       /* [out] Output PinYin string buf,  allocated by TTS service mudule */

    TTSDWORD    dwReserved;     /* [in/out] Reserved field */
} TTSData, *PTTSData;

#pragma pack(pop)




#pragma pack(4)

enum
{
	INFO_CONTINUE		= 0,
	INFO_FINISH			= 1,
};

#ifndef SEM_VOICENAME_LEN_MAX
#define SEM_VOICENAME_LEN_MAX               32
#define SEM_VOICE_LANG_MAX                  16
#define SEM_SAMPLERATE_MAX                   8
#endif

typedef struct
{
	TTSDWORD        cbSize;                     /* [in] Size of structure */
	TTSDWORD        dwVoiceID;                  /* [out] Voice ID unique in the scope of engine */
	TTSDWORD        dwGender;                   /* [out] Gender of speaker */
	TTSDWORD        dwAge;                      /* [out] Age of speaker */
	TTSCHAR         szVoiceName[SEM_VOICENAME_LEN_MAX];     /* [out] Voice description string */
	TTSDWORD        dwLangCount;                /* [out] Count of languages */
	TTSDWORD        arrLanguage[SEM_VOICE_LANG_MAX];        /* [out] Language identifier */
	TTSDWORD        arrLangScore[SEM_VOICE_LANG_MAX];       /* [out] Language scores */
	TTSDWORD        dwSRCount;                  /* [out] Count of sample rates */
	TTSDWORD        arrSampleRate[SEM_SAMPLERATE_MAX];      /* [out] Voice Sample rate array: 6k, 8k, 11k, 16k, ... */
	TTSDWORD        dwEngineID;                 /* [out] ID of the engine which this voice belong to */
	TTSDWORD        dwReserved;                 /* [in/out] Reserved: must set to zero */
} TVoiceInfo, *PTVoiceInfo;
#pragma pack()

#endif /* __SCYLLA_TYPES_H__ */
