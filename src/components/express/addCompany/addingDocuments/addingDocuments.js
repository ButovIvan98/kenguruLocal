import React from "react";
import classes from './addingDocuments.module.css';
import {DropzoneArea} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import {AttachFile, Description, PictureAsPdf, Theaters} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import img from './img/1.png';
import {addDocuments, addingDocumentINN} from "../../../../redux/addCompanyReducer";
import Redirect from "react-router-dom/es/Redirect";

const AddingDocuments = (props) => {
    console.log(props)
    const handlePreviewIcon = (fileObject, classes) => {
        const {type} = fileObject.file
        const iconProps = {
            className: classes.image,
        }
        if (type.startsWith("video/")) return <Theaters {...iconProps} />

        switch (type) {
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <Description {...iconProps} />
            case "application/pdf":
                return <PictureAsPdf {...iconProps} />
            default:
                return <AttachFile {...iconProps} />
        }
    }
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row mt-3' + ' ' + classes.block}>
                <div className={'col-lg-12'}>
                    <h2>
                        Работа с документами
                    </h2>
                </div>
                <div className={'col-lg-12 mt-3 text-center'}>
                    <a href={props.company.documents.urlContract} className={classes.buttonLoad} download>
                        <span>
                            Скачать договор
                        </span>
                    </a>
                </div>
                <div className={'col-lg-12 mt-4 text-center'}>
                    <h5>Скачайте, ознакомьтесь и подпишите договор.<br/>Затем прикрепите перечень документов и нажмите
                        "Отправить."</h5>
                </div>
                {props.company.fullInfoCompany.opf_short === 'ИП'
                    ? <div className={'col-12 pl-3 pr-3'}>
                        <div className={'row'}>
                            <div className={'col-lg-6 mt-3 mb-3'}>
                                <DropzoneArea
                                    dropzoneText={"Перенесите или добавьте Выписку из ЕГРИП"}
                                    dropzoneClass={classes.dropzoneContainer}
                                    dropzoneParagraphClass={classes.dropzoneParagraph}
                                    maxFileSize={10000000}
                                    filesLimit={1}
                                    acceptedFiles={['application/doc','application/docx','application/pdf','application/odt']}
                                    showFileNames={true}
                                    type={'file'}
                                    uploadIconSize={classes.dropzoneSvg}
                                    onChange={(files) => {
                                        props.addingDocumentEgrip(files)
                                    }}
                                />
                            </div>
                            <div className={'col-lg-6 mt-3 mb-3'}>
                                <DropzoneArea
                                    //acceptedFiles={'/doc,/pdf'}
                                    dropzoneText={"Перетащите или добавьте подписанный договор"}
                                    dropzoneClass={classes.dropzoneContainer}
                                    dropzoneParagraphClass={classes.dropzoneParagraph}
                                    maxFileSize={10000000}
                                    filesLimit={1}
                                    acceptedFiles={['application/doc', 'application/pdf']}
                                    onChange={(files) => {
                                        props.addingDocumentContract(files)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    : <div className={'row pl-3 pr-3'}>
                        <div className={'col-lg-6 mt-3 mb-3'}>
                            <DropzoneArea
                                dropzoneText={"Перенесите или добавьте ИНН"}
                                dropzoneClass={classes.dropzoneContainer}
                                dropzoneParagraphClass={classes.dropzoneParagraph}
                                maxFileSize={10000000}
                                filesLimit={1}
                                //acceptedFiles={['application/doc','application/docx','application/pdf','application/odt']}
                                showFileNames={true}
                                uploadIconSize={classes.dropzoneSvg}
                                onChange={(files) => {
                                    props.addingDocumentINN(files)
                                }}
                            />
                        </div>
                        <div className={'col-lg-6 mt-3 mb-3'}>
                            <DropzoneArea
                                dropzoneText={"Перенесите или добавьте Приказ о назначении директора."}
                                dropzoneClass={classes.dropzoneContainer}
                                dropzoneParagraphClass={classes.dropzoneParagraph}
                                maxFileSize={10000000}
                                filesLimit={1}
                                acceptedFiles={['application/doc', 'application/pdf']}

                            />
                        </div>
                        <div className={'col-lg-6 mt-3 mb-3'}>
                            <DropzoneArea
                                //acceptedFiles={'/doc,/pdf'}
                                dropzoneText={"Перетащите или добавьте Устав организации"}
                                dropzoneClass={classes.dropzoneContainer}
                                dropzoneParagraphClass={classes.dropzoneParagraph}
                                maxFileSize={10000000}
                                filesLimit={1}
                                acceptedFiles={['application/doc', 'application/pdf']}
                            />
                        </div>
                        <div className={'col-lg-6 mt-3 mb-3'}>
                            <DropzoneArea
                                //acceptedFiles={'/doc,/pdf'}
                                dropzoneText={"Перетащите или добавьте подписанный договор"}
                                dropzoneClass={classes.dropzoneContainer}
                                dropzoneParagraphClass={classes.dropzoneParagraph}
                                maxFileSize={10000000}
                                filesLimit={1}
                                acceptedFiles={['application/doc', 'application/pdf']}
                            />
                        </div>
                    </div>
                }
                <div className={'col-lg-12 mt-3 mb-3 text-center self-align-center'}>
                    {
                        props.company.documents.addingDocuments
                            ? <Redirect to={'/addCompany/loadingFile/done'}/>
                            : <button
                                onClick={()=>{props.addDocumentsCompany(
                                    props.company.documents,
                                    props.company.fullInfoCompany.opf_short,
                                    props.company.idCompany)
                                    }
                                }
                                className={classes.addAddress}>
                                <span>Отправить документы</span>
                            </button>
                    }

                </div>
            </div>
        </div>
    </div>
}
export default AddingDocuments;