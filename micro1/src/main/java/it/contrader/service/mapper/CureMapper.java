package it.contrader.service.mapper;

import it.contrader.domain.*;
import it.contrader.service.dto.CureDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Cure and its DTO CureDTO.
 */
@Mapper(componentModel = "spring", uses = {ReadingMapper.class, PatologyMapper.class})
public interface CureMapper extends EntityMapper<CureDTO, Cure> {

    @Mapping(source = "reading.id", target = "readingId")
    @Mapping(source = "reading.cf", target = "readingCf")
    @Mapping(source = "patology.id", target = "patologyId")
    @Mapping(source = "patology.pato", target = "patologyPato")
    CureDTO toDto(Cure cure);

    @Mapping(source = "readingId", target = "reading")
    @Mapping(source = "patologyId", target = "patology")
    Cure toEntity(CureDTO cureDTO);

    default Cure fromId(Long id) {
        if (id == null) {
            return null;
        }
        Cure cure = new Cure();
        cure.setId(id);
        return cure;
    }
}
